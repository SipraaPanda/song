console.log("Hello!");
const music = document.querySelector('audio');
const play = document.getElementById('play');
const img = document.querySelector('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const volumecontrol=document.getElementById('volume');

play.addEventListener('click', () => {
    if (music.paused) {
        music.play();

        img.classList.add("anime");
        play.src = 'pause.svg'; // Change the src attribute to the pause icon
    } else {
        music.pause();
        img.classList.remove("anime");
        play.src = 'play.svg'; // Change the src attribute back to the play icon
    }
});
const songs = [{
    name: "song1",
    title: "Adhuri Kahani",
    artist: "Arijit Singh"
},
{
    name: "song2",
    title: "Besabriyan",
    artist: "Arman Malik"
},
{
    name: "song3",
    title: "Kabira",
    artist: "Arijit Singh"
},
]
//change the music data
const loadsong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name + ".mp3";
    img.src = songs.name + ".jpeg";
    music.volume=volumecontrol.value;
};
songindex = 0;
//loadsong(songs[2]);
const nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
     music.play();
     play.src = 'pause.svg';
};

const prevsong = () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
     music.play();
     play.src = 'pause.svg';
};

volumecontrol.addEventListener('input', () => {
    music.volume = volumecontrol.value; // Set the volume of the audio element
});

next.addEventListener('click', nextsong);
prev.addEventListener('click', prevsong);