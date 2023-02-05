// `npm run addc` adds a new challenge
let challenges = require('../resource/challenges.json')
let countries = require('../resource/countryList.json')

let indexes = []
let chalKeys = Object.keys(challenges).sort();
let latestChal = strToDate(chalKeys[chalKeys.length-1])

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('How many countries? ', num => {
    let date = latestChal
    for (var i = 0; i < num; i++) {
        date.setDate(date.getDate() + 1)

        let index = randInt(0, countries.length - 1)
        indexes.push(index)
        
        console.log(dateToStr(date) + ' ' + countries[index])
    }
    readline.close();
});

// Inclusive
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
}

function dateToStr(date) {
    var yyyy = date.getFullYear() + ''

    var mm = date.getMonth() + 1
    if (mm < 10) mm = '0' + mm

    var dd = date.getDate()
    if (dd < 10) dd = '0' + dd


    return `${yyyy}${mm}${dd}`
}

function strToDate(str) {
    return new Date(str.replace(/(\d\d\d\d)(\d\d)(\d\d)/, '$1/$2/$3'))
}