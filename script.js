let TimeText = document.getElementById("TimeText");
let ms=0;
let s=0;
let m=0;
let TimerOn = false;
let processInterval = null;
TimeText.innerHTML = "Press Any Key";

document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
  }, false);
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if(code=="Space"){
        if(TimerOn){
            stop();
        }else{
            start();
        }
        
    }
  }, false);

function processTimer(){
    ms += 10;
    if(ms>=999){
        s++;
        ms = 0;
    }
    if(s>=59){
        m++;
        s=0;
    }
    TimeText.innerHTML = String(m)+":"+String(s)+":"+String(ms);
    
    
    
}

function start(){
    ms = 0;
    s = 0;
    m = 0;
    clearInterval(processInterval);
    TimerOn=true;
    processInterval = setInterval(processTimer,10);
}

function stop(){
    TimerOn = false;
    console.log("idk")
    clearInterval(processInterval );
}
