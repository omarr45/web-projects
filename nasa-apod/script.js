const API = "https://api.nasa.gov/planetary/apod?api_key=SnpgUIlwedUb1b5JiAWAhTcapNgZ1PaQemPa6N05"

let name = document.getElementById("img-title");
let photo = document.getElementById("apod");
let author = document.getElementById("author")
let desc = document.getElementById("desc");
let click = document.getElementById("clickable");
let link = document.getElementById("link");

function showData() {
    fetch(API)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

            name.innerHTML = data.title;
            author.innerHTML = "By: " + data.copyright;
            desc.innerHTML = data.explanation;
            photo.src = data.url;
            link.href = data.hdurl;

            if (data.title == "undefined" || data.explanation == "undefined") {
                photo.src = "error.png";
                name.innerHTML = "Sorry!<br>Today's image hasn't been uploaded yet";
                author.style.display = "none";
                desc.style.display = "none";
                click.style.display = "none";
            }
        })
        .catch((e) => {
            console.error('Error:', e);
            photo.src = "error.png";
            name.innerHTML = "Sorry!<br>Today's image hasn't been uploaded yet";
            author.style.display = "none";
            desc.style.display = "none";
            click.style.display = "none";
        })
}

showData();