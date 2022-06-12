let musics = [
    {titulo:"Your Love",artista:"The Outfield",src:"musics/The Outfield - Your Love (TraduçãoLegendado).mp3",img:"imagens/love.jpg"},
    {titulo:"Somewhere over the rainbow",artista:"Israel Kamakawiwo'ole",src:"musics/OFFICIAL Somewhere over the Rainbow - Israel IZ Kamakawiwoʻole.mp3",img:"imagens/rainbow.jpg"},
    {titulo:"You are my sunshine",artista:"Abbey Glover",src:"/musics/You are my sunshine   Abbey Glover (Legendado).mp3",img:"imagens/sunshine.jpg"}
];

// variables
document.querySelector('.button-pause').style.display = 'none';
let music = document.querySelector('audio');
let indexMusic = 0;

 let musicDuration = document.querySelector('.end');
 let imagem = document.querySelector('img');
 let titleMusic = document.querySelector('.description h2');
 let artistName = document.querySelector('.description i');

 renderMusic(indexMusic);

musicDuration.textContent = formatTime(Math.floor(music.duration));


//events
document.querySelector('.button-play').addEventListener('click', playmusic);

document.querySelector('.button-pause').addEventListener('click', pausemusic);

music.addEventListener('timeupdate',updatebar);

document.querySelector('.previous').addEventListener('click',() => {
    indexMusic--;
    renderMusic(indexMusic);
});

document.querySelector('.next').addEventListener('click',() => {
    indexMusic++;
    renderMusic(indexMusic);
});


// functions

function renderMusic(index){
    music.setAttribute('src',musics[index].src);
    music.addEventListener('loadeddata', () => {
      titleMusic.textContent = musics[index].titulo;
      artistName.textContent = musics[index].artista;
      imagem.src = musics[index].img;
      musicDuration.textContent = formatTime(Math.floor(music.duration));
    }); 
}

function playmusic() {
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function pausemusic() {
    music.pause();
    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
}

function updatebar() {
    let bar = document.querySelector('progress');
    bar.style.width = music.currentTime / music.duration * 100 + '%';
    let elapsedTime = document.querySelector('.start');
    elapsedTime.textContent =  formatTime(Math.floor(music.currentTime));
}


function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
}


