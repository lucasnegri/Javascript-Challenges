
/*ANALOG CLOCK*/
const clockDivs = [document.querySelector('.hour-hand'), document.querySelector('.min-hand'), document.querySelector('.second-hand') ]

function analogClock(){
    const now = new Date();
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    clockDivs[2].style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    clockDivs[1].style.transform = `rotate(${minsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    clockDivs[0].style.transform = `rotate(${hourDegrees}deg)`;
};
setInterval(analogClock, 1000);
analogClock();




/*DIGITAL CLOCK*/
function digitalClock(){
    const now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var session = 'AM';

    if (h==0){
        h=12;
    }
    if (h>12){
        h = h-12
        session ='PM';
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ':' + m + ':' + s + ' ' + session;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(digitalClock, 1000);
}

digitalClock()