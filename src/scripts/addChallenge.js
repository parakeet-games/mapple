// `npm run addc` runs this script
const chaljson = require('../resource/challenges.json')
const countries = require('../resource/countrylist.json')

const fs = require('fs');

let chaltxt = fs.readFileSync('./src/resource/challenges.json').toString();
let chalcrop = chaltxt.replace(/([\s\S]+)}\s*}\s*/, '$1') // Crop off final closing bracket and whitespace

let indexes = []

// ****
// NOTE THAT program "thinks" today is the latest date in the chaljson, which may be in the future,
// Or today's date in Pacific Time, whichever is later

// Relies on the fact that all objects are valid chaljson
// except for the first, "0default", the default challenge

let chalDates = Object.keys(chaljson).sort();
chalDates.splice(0, 1); // Removes "0default"

let over195 = chalDates.length > 195;

let chalAnswers = []
    
for (var i = 0; i < chalDates.length; i++) {
    let answer = chaljson[chalDates[i]]['answer']
    chalAnswers.push(chaljson[chalDates[i]]['answer'])

    if (!over195 // If within the first 195 chaljson, don't toelrate repeats
        || i >= chalDates.length-30 // Else, don't tolerate repeats from the previous 30
        ) {
        countries.splice(countries.indexOf(answer), 1)
    }
}

let todayStr = dateToStr(new Date())
let chalStr = chalDates[chalDates.length-1]
let chalDate = strToDate(chalDates[chalDates.length-1])

console.log(`Farthest challenge in backlog (may be in future):\n#${chalDates.length} - ${chalStr} - ${chalAnswers[chalDates.length-1]}`)
console.log(`\nToday's date in PT: `+todayStr)

let latestStr
if (todayStr.localeCompare(chalStr) == 1) {
    latestStr = todayStr
} else {
    var chal1 = chalDate
    chal1.setDate(chalDate.getDate() + 1)

    latestStr = dateToStr(chal1)
}

console.log(`\nNext challenge: `+latestStr)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('\nHow many countries do you want to add? ', num => {
    let date = strToDate(latestStr)
    chalcrop += '}'

    for (var i = 0; i < num; i++) {
        chalcrop += ',\n'
        if (i > 0) date.setDate(date.getDate() + 1)

        let index = randInt(0, countries.length - 1)
        indexes.push(index)
        
        // console.log(dateToStr(date) + ' ' + countries[index])
        chalcrop +=
`  "${dateToStr(date)}": {
     "answer": "${countries[index]}",
     "clues": []
  }`
    }
    chalcrop += '\n}'

    let chaltxt = fs.readFileSync('./src/resource/challenges.json').toString();
    fs.writeFileSync('./src/resource/challenges.json', chalcrop, {flag:'rs+'});

    console.log(`\nDONE: ${num} random countries (${latestStr} - ${dateToStr(date)}) added to challenges.json`)
    if (over195) {
        console.log(`No conflicts with previous 30 challenges (${chalDates[chalDates.length-30]} - ${chalDates[chalDates.length-1]})`)
    } else {
        console.log(`No conflicts with previous challenges`)
    }

    readline.close()
});

// Inclusive
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
}

// Convert Date object to YYYYMMDD string
function dateToStr(date) {
    // Uses France (Canada) as locale because it uses YYYY-MM-DD
    // Uses America/Los_Angeles because MAPPLE is Pacific Time
    return date.toLocaleDateString( 'fr-CA', { 'timeZone': 'America/Los_Angeles' }).replace(/-/g, '')
}

// Convert YYYYMMDD string to Date object
function strToDate(str) {
    return new Date(str.replace(/(\d\d\d\d)(\d\d)(\d\d)/, '$1/$2/$3'))
}