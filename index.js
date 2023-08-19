//---Initialization---
let songidx = 0;
let playbtn = document.getElementById('mainplaybtn');
let progressbar = document.getElementById('progressbar');
let icons = document.getElementsByClassName('icons');
const songname=document.getElementById('songname');
const gif=document.getElementById('gifimg');
let songs = [
    { name: "Ram Siya Ram | Adipusursh", path: "Songs/_Ram Siya Ram.mp3" },
    { name: "Pasoori ", path: "Songs/Pasoori.mp3" },
     { name: "Kesariya | Brahmastra ", path: "Songs/Kesariya - Brahmastra.mp3" },
    { name: "London Thmukda | Queen", path: "Songs/London_Thumakda.mp3" },
    { name: "Hall of Fame ", path: "Songs/Hall_of_Fame.mp3" },
]

let audioelement = new Audio(songs[0].path);
// console.log(audioelement.currentTime);
// if(audioelement.currentTime==audioelement.duration)nextfunction();


    playbtn.addEventListener('click', () => {
        if (audioelement.paused || audioelement.currentTime <= 0) {

            playbtn.classList.remove('fa-circle-play');
            playbtn.classList.add('fa-circle-pause');
            gifplay();
            
            audioelement.play();
            playbtntosmallbtn_play();
        }
        else {
            playbtntosmallbtn_pause();
            gifpause();
            audioelement.pause();
            playbtn.classList.add('fa-circle-play');
            playbtn.classList.remove('fa-circle-pause'); 
        }
    });





const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('impbtn')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
const playbtntosmallbtn_play=()=>{
    Array.from(document.getElementsByClassName('impbtn')).forEach((element)=>{
        if(element.id==songidx) {
            element.classList.add('fa-circle-pause');
            element.classList.remove('fa-circle-play');
        }
    });
}
const playbtntosmallbtn_pause=()=>{
    Array.from(document.getElementsByClassName('impbtn')).forEach((element)=>{
        if(element.id==songidx) {
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        }
    });
}

Array.from(document.getElementsByClassName('impbtn')).forEach((element) => {
    makeAllPlay();
    if(audioelement.currentTime==audioelement.duration)nextfunction();
    element.addEventListener('click', (e) => {

        songidx = parseInt(e.target.id);
        audioelement.src = songs[songidx].path;
        
        if (e.target.classList.contains('fa-circle-play')) {
            makeAllPlay();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            gifplay();
            playbtn.classList.remove('fa-circle-play');
            playbtn.classList.add('fa-circle-pause');
            audioelement.play();
        }
        else {
            gifpause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            playbtn.classList.add('fa-circle-play');
            playbtn.classList.remove('fa-circle-pause');
            
            audioelement.pause();
        }
    });
});
audioelement.addEventListener('timeupdate', () => {
    progressbar.value = ((audioelement.currentTime / audioelement.duration) * 100);

})

progressbar.addEventListener('change', () => {
    audioelement.currentTime = (progressbar.value * audioelement.duration) / 100;

});

document.getElementById('next').addEventListener('click', () => {
    // console.log(songidx);
    if (songidx < 4) {
        songidx ++;
    }
    else songidx = 0;
    audioelement.src = songs[songidx].path;
    makeAllPlay();
    playbtntosmallbtn_play();
    gifplay();
    playbtn.classList.remove('fa-circle-play'); progressbar.value = 0;
    playbtn.classList.add('fa-circle-pause');
    audioelement.play();

});


document.getElementById('prev').addEventListener('click', () => {

    if (songidx == 0) {
        songidx = 4;
    }
    else songidx--;
    audioelement.src = songs[songidx].path;
    makeAllPlay();
    playbtntosmallbtn_play();
    gifplay();
    playbtn.classList.remove('fa-circle-play'); progressbar.value = 0;
    playbtn.classList.add('fa-circle-pause');
    audioelement.play();
});
 const gifplay=()=>{songname.innerText=songs[songidx].name;
gif.style.opacity=1;}
const gifpause=()=>{songname.innerText=songs[songidx].name;
    gif.style.opacity=0;}



