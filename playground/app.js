const tracks = [
    {
        name: 'FADED', 
        photo: 'faded' ,
        song : 'faded' ,
        singer : 'Alan Walker' ,
        size : 198
    } ,
    {
        name : 'On My Way' ,
        photo: 'On My Way' ,
        song : 'On My Way' ,
        singer : 'Alan Walker' ,
        size : 198
    } ,
    {
        name : 'TONGUE' ,
        photo : 'Tongue' ,
        song : 'Tongue' ,
        singer : 'Maribou State' ,
        size : 100
    }
]

let musicID = 0;


 let audio = new Audio(`./songs/${tracks[musicID].song}.mp3`)
const image = document.querySelector('.circle')
const song_name = document.querySelector('.song_name')
const singer = document.querySelector('.singer')  
const pause = document.querySelector('.pause')
const all = document.querySelector('.all')
let range = document.querySelector('.range')

function track_playing() {
    // all.innerHTML = `<audio src="./songs/${tracks[musicID].song}.mp3" style="display: none;">`
    audio.pause()
    range.value = 0;
     audio = new Audio(`./songs/${tracks[musicID].song}.mp3`)
    image.innerHTML = `<img src= "./pictures/${tracks[musicID].song}.jpg" >`
    song_name.innerHTML = tracks[musicID].name
    singer.innerHTML = tracks[musicID].singer
    audio.play()
}


function anythings(){
    image.innerHTML = `<img src= "./pictures/${tracks[musicID].song}.jpg" >`
    song_name.innerHTML = tracks[musicID].name
    singer.innerHTML = tracks[musicID].singer
}


let playing = false;
function pausing() {
    if (playing == false) {
    
        audio.play();
        pause.innerHTML = `<i class="fa-solid fa-pause"></i>`
        anythings()
      
       changing()
        playing = true;
    } else if (playing == true) {
        audio.pause()
        pause.innerHTML = `<i class="fa-solid fa-play"></i>`
        playing = false
        
        changing()
    }
}



function Next() {
    musicID++;
    track_playing();
    pausing()
    
    
    changing()
   
}
function pre(){
    musicID--;
    track_playing();
    pausing()
    
    
    changing()
}

function changing(){
  const x =  tracks[musicID].size / 100 * range.value
 



  
  audio.currentTime = x
}






