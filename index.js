CITIES = [
    "Mariehamn",
    "Tirana",
    "Vienna",
    "Minsk",
    "Brussels",
    "Sarajevo",
    "Sofia",
    "Zagreb",
    "Nicosia",
    "Prague",
    "Copenhagen",
    "Tallinn",
    "Helsinki",
    "Paris",
    "Berlin",
    "Athens",
    "Rome",
    "Budapest",
    "Reykjavík",
    "Dublin",
    "Riga",
    "Vaduz",
    "Vilnius",
    "Luxembourg",
    "Skopje",
    "Valletta",
    "Chișinău",
    "Monaco",
    "Podgorica",
    "Amsterdam",
    "Oslo",
    "Warsaw",
    "Lisbon",
    "Pristina",
    "Bucharest",
    "Moscow",
    "Belgrade",
    "Bratislava",
    "Ljubljana",
    "Madrid",
    "Stockholm",
    "Bern",
    "Kiev",
    "London"
  ];

function randomCity(notThisCityIndex) {
    cities = [ ...CITIES ];
    if (notThisCityIndex) {
        cities.slice(notThisCityIndex, 1);
    }
    return cities[Math.floor(Math.random() * cities.length)]
}

function randomTemp() {
    return Math.floor(Math.random() * 100) - 50;
}

function createExercise() {
    city1 = randomCity();
    city2 = randomCity(CITIES.indexOf(city1));
    temp1 = randomTemp();
    temp2 = randomTemp();

    return (`
In ${city1} it is ${temp1}°C.
In ${city2} it is ${temp2}°C.
${temp1}°C __ ${temp2}°C
${city1} is hotter/colder.
${city2} is hotter/colder.
The temperature difference is ___ °C.
`)
}

function createExercises(numQuestions) {
    let result = '';

    for (let i = 0; i < numQuestions; i++) {
        result += createExercise();
    }
    console.log (result);
}

`
To get 12 exercises copy and pase the following line below:

createExercises(12)

Details at: https://github.com/Tomy8s/comparingTemperatures`
