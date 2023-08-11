console.log("welcome to Spotify");

//Initialize the Varible

let songIndex = 0;
let audioElement = new Audio('/song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById("MyprogressBar");
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    { songName: "Pasoori-Coke Studio", filePath: "/song/1.mp3", coverPath: "/cover/cover 1.jpg" },
    { songName: "Aaj Ro Len De 1920", filePath: "/song/2.mp3", coverPath: "/cover/cover 2.jpg" },
    { songName: "Barish Ki Jaaye", filePath: "/song/3.mp3", coverPath: "/cover/cover 3.jpg" },
    { songName: "Blue Eyes", filePath: "/song/4.mp3", coverPath: "/cover/cover 4.jpg" },
    { songName: "Is Qadar", filePath: "/song/5.mp3", coverPath: "/cover/cover 5.jpg" },
    { songName: "Saiyaan ji", filePath: "/song/6.mp3", coverPath: "/cover/cover 6.jpg" },
    { songName: "Tadpati hai Tari Baatein", filePath: "/song/7.mp3", coverPath: "/cover/cover 7.jpg" },
    { songName: "Tere layi", filePath: "/song/8.mp3", coverPath: "/cover/cover 8.jpg" },
    { songName: "Thoda Thoda Pyaar Hua Tumse", filePath: "/song/9.mp3", coverPath: "/cover/cover 9.jpg" },
    { songName: "Tu Aake Dekhle", filePath: "/song/10.mp3", coverPath: "/cover/cover 10.jpg" },
]


songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//let audioElement = new Audio('Pasoori-Coke Studio.mp3')
//audioElement.play();

//Handle Play/puse click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    MyProgressBar.value = progress;


})


MyProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((MyProgressBar.value * audioElement.duration) / 100);
})
const makeAllPlays= ()=>{
    
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        //audioElement.src = '/song/${songIndex+1}.mp3';//it not working as expected
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    //audioElement.src = '/song/${songIndex+1}.mp3';//it not working as expected
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songInde<=9){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    //audioElement.src = '/song/${songIndex+1}.mp3';//it not working as expected
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})