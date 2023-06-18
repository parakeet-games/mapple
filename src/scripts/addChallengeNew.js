let challenges = require('../resource/challenges.json')
let countries = require('../resource/countrylist.json')

let countriesUsed = [] // List of "used" countries, so no duplicates are made

let numCountries = 0 // # of countries in list
let totalCountries = 0 // Total countries in challenge list

console.log('Reading through the challenge list')
console.log('This includes all past challenges, and (if they exist) the current and scheduled challenges')

Object.values(challenges).forEach(countryUsed => {
    countriesUsed.push(countryUsed.answer) // Add country to list of countries used

    numCountries++
    totalCountries++

    if (numCountries > 195) { // Reset list of countries used for every 195 in challenge list
        const countDuplicates = arr => arr.reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
          }, {});
          
          const duplicates = countDuplicates(countriesUsed);
          
          for (const [key, value] of Object.entries(duplicates)) {
            if (value > 1) {
              console.log(`${value} occurrence${value > 2 ? "s" : ""} of "${key}"`);
            }
          }
        
        // Reset list of countries used
        numCountries = 0
        countriesUsed = []

        console.log('Reached challenge #'+totalCountries+'. Resetting list of duplicates')
    }
})



for (let i = 0; i < process.argv[2]; i++) {
    console.log(i)
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