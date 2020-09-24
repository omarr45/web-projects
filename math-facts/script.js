const API = 'https://numbersapi.p.rapidapi.com/random/math?fragment=true&json=true&rapidapi-key=1347e918demshb2956622439bb56p118b7cjsn8820cdaaaffe'


const facts = document.getElementById('facts');
const myNumber = document.getElementById('dispNumber');
var query = null;

async function getNumber() {

    const response = await fetch(API);
    const data = await response.json();
    console.log(data);

    facts.innerHTML = data.text;
    myNumber.innerHTML = data.number;

}

getNumber();