cities = require('./cities');
citiesLen =  cities.length;

function randomCity() {
    return cities[Math.floor(Math.random() * citiesLen)]
}

function randomTemp() {
    return Math.floor(Math.random() * 100) - 50;
}

function createSentence() {
    city1 = randomCity();
    city2 = randomCity();
    temp1 = randomTemp();
    temp2 = randomTemp();

    return (`
In ${city1} it is ${temp1}°C.
In ${city2} it is ${temp2}°C.
${temp1} __ ${temp2}
${city1} is hotter/colder.
${city2} is hotter/colder.
`)
}

result = '';

for (let i = 0; i < 32; i++) {
    result += createSentence();
}

console.log (result)