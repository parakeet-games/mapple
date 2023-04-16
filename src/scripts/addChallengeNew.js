let challenges = require('../resource/challenges.json')
let countries = require('../resource/countrylist.json')

let countriesUsed = []
let numCountries = 0
let totalCountries = 0

Object.values(challenges).forEach(countryUsed => {
    countriesUsed.push(countryUsed.answer)

    numCountries++
    totalCountries++
    if (numCountries > 195) {
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
        
        numCountries = 0
        countriesUsed = []
    }
})

for (let i = 0; i < process.argv[2]; i++) {
    console.log(i)
}
