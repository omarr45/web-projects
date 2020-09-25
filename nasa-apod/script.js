const API = "https://api.nasa.gov/planetary/apod?api_key=SnpgUIlwedUb1b5JiAWAhTcapNgZ1PaQemPa6N05"

async function getData() {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);

    let name = document.getElementById("img-title");
    let author = document.getElementById("author")
    let desc = document.getElementById("desc");
    let link = document.getElementById("link");

    name.innerHTML = data.title;
    author.innerHTML = "By: " + data.copyright;
    desc.innerHTML = data.explanation;
    link.href = data.hdurl;
}

getData();