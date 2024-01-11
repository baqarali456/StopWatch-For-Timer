const Hours = document.getElementById('Hour');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');
const play = document.getElementById('play');
const reset = document.getElementById('reset');


let hr = 0;
let min = 0;
let sec = 0;

play.addEventListener('click',start);

let interval;

function start(){
    if(play.classList.contains('fa-play')){
       play.classList.remove('fa-play');
       play.classList.add('fa-pause');
       interval = setInterval(stopWatch,1000)
    }
    else if(play.classList.contains('fa-pause')){
       play.classList.add('fa-play');
       play.classList.remove('fa-pause');
        clearInterval(interval);
   }
   
    
}

function stopWatch(){
        
        sec++; //59
        if(sec === 59){
            min++; //1
            sec = 0;
        }
        if(min == 59){
            hr++;
            min = 0;
        }
     Hours.innerHTML = hr<10?`0${hr}`:hr
     Minutes.innerHTML = min<10?`0${min}`:min
     Seconds.innerHTML = sec<10?`0${sec}`:sec
    
}


reset.addEventListener('click',()=>{
    clearInterval(interval);
    hr = 0;
    min = 0;
    sec = 0;
    Hours.innerHTML = hr<10?`0${hr}`:hr
    Minutes.innerHTML = min<10?`0${min}`:min
    Seconds.innerHTML = sec<10?`0${sec}`:sec
})
