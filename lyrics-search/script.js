const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');

const API_URL = "https://api.lyrics.ovh";

////// https://www.youtube.com/watch?v=wjgiPFWvwBI

form.addEventListener('submit', e => {
    e.preventDefault();
    searchValue = search.value.trim();

    if (!searchValue) {
        alert('There is nothing to search')
    } else {
        searchSong(searchValue);
        alert(searchValue);
    }
})

function searchSong(query) {
    const searchResult = await fetch(`${APIURL}/suggest/${query}`);
    const data = await searchResult.json;

    showData(data);
}

function showData(data) {
    result.innerHTML = `
    <ul class="song-list">
    ${data.data.map(song=> `<li>
                            <div>
                                <strong>
                                ${song.artist.name}
                                </strong> -${song.title}
                            </div>
                            <span data-artist="${song.artist.name}" data-songtitle="${song.title}">
                                get lyrics
                            </span>
                            </li>

    `).join('')
    }
    </ul>`
}