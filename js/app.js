const song = document.getElementById('audio');
const play = document.getElementById('play');

let isPlaying = false;

function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-fill');
    play.querySelector('.bi').classList.add('bi-pause-fill');
    song.play();
    isPlaying = true;
};
function pauseSong() {
    play.querySelector('.bi').classList.remove('bi-pause-fill');
    play.querySelector('.bi').classList.add('bi-play-fill');
    song.pause();
    isPlaying = false;
};

function playPauseDecider() {
    if (isPlaying === true) {
        pauseSong();
    };
    else {
        playSong();
    };
};

play.addEventListener('click', playPauseDecider);

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function () {
    pesquisar();
    return false;
});

function pesquisar() {
    let section = document.getElementById('search-results');

    let searchField = document.getElementById('search-field').value;

    if (!searchField) {
        section.innerHTML = "<p class ='no-results'>Nenhum compositor ou música foi encontrado. <br> Você precisa digitar o nome de um compositor clássico brasileiro ou o nome de uma música.</p>";
        return;
    };

    searchField = searchField.toLowerCase();

    let results = "";

    let name = "";
    let about = "";
    let link = "";
    let video = "";
    let tags = "";

    for (let data of allData) {
        name = data.name.toLowerCase();
        about = data.about.toLowerCase();
        video = data.video.toLowerCase();
        tags = data.tags.toLowerCase();

        if (name.includes(searchField) || about.includes(searchField) || tags.includes(searchField)) {
            results += `
                <div class="item-result">
                    <h2>
                        <a href= ${data.link} target="_blank">${data.name}</a>
                    </h2>
                        <p class="about-meta">${data.about}</p>
                        <a class="video-link" href=${data.video} target="_blank">🔗Vídeo</a>
                </div>
            `;
        };
    };

    if (!results) {
        results = "<p class='no-results'>Nenhum compositor/música foi encontrado!</p>";
    };

    section.innerHTML = results;
};
