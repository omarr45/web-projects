const API1 = 'https://numbersapi.p.rapidapi.com/'
const API2 = '/math?fragment=true&json=true&rapidapi-key=1347e918demshb2956622439bb56p118b7cjsn8820cdaaaffe';

const TEST = 'https://numbersapi.p.rapidapi.com/123/math?fragment=true&json=true&rapidapi-key=1347e918demshb2956622439bb56p118b7cjsn8820cdaaaffe';

const facts = document.getElementById('facts');
const myNumber = document.getElementById('dispNumber');
var query = null;

function Search() {
    getNumber().catch(error => {
        console.log("wrong format");
        alert("Wrong number format!\nTry again please");
        document.Form.Number.value = "";
    })
}

async function getNumber() {

    if (document.Form.Number.value != "")
        query = document.Form.Number.value;

    const response = await fetch(API1 + query + API2);
    const data = await response.json();
    console.log(data);

    myNumber.innerHTML = query;

    if (data.found) {
        facts.innerHTML = data.text;

    } else {
        facts.innerHTML = "Oops, this looks like a boring number.";
    }

}