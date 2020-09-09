const selectInputs = {
    hours: document.querySelector(".hour"),
    mins: document.querySelector(".min"),
    sec: document.querySelector(".sec"),
    button: document.querySelector('.changeTheme')
}

selectInputs.button.addEventListener('click',()=>{
    changeTheme();
})

changeTheme = () =>{
    if(selectInputs.button.textContent=="dark"){
        document.body.style.backgroundColor = "cyan";
        document.querySelector('.clock').style.color = "red";
        document.querySelector('.clock').style.border = "8px cyan solid";
        selectInputs.button.textContent = "light";
        selectInputs.button.style.color = "white";
    }else{
        document.body.style.backgroundColor = "rgb(70, 65, 65)";
        document.querySelector('.clock').style.color = "white";
        document.querySelector('.clock').style.border = "8px rgb(70, 65, 65) solid";
        selectInputs.button.textContent = "dark";
        selectInputs.button.style.color = "black";
    }
    
}


startClock=()=>{
    let time = new Date();
    time = time.toLocaleTimeString();
    time = time.split(" ");
    const currTime = time[1];
    time = time[0].split(":");
    let hrs = parseInt(time[0]);
    let min = parseInt(time[1]);
    let sec = parseInt(time[2]);
    //if(currTime=="PM")hrs=+12;
    hrs = (((hrs/12)*360+(min/60)*20+180)).toFixed(2);
    min = (((min/60)*360)+(sec/60)*5+180).toFixed(2);
    sec = (((sec/60)*360+180)).toFixed(2);
    selectInputs.hours.style.transform = `translateX(-50%) translateY(-10%) rotateZ(${hrs}deg)`;
    selectInputs.mins.style.transform = `translateX(-50%) translateY(-10%) rotateZ(${min}deg)`;
    selectInputs.sec.style.transform = `translateX(-50%) translateY(-10%) rotateZ(${sec}deg)`;
}

setInterval(startClock,0000);