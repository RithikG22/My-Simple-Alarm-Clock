let hrsElem = document.getElementById("hoursEl");
let minElem = document.getElementById("minutesEl");
let currentTIme = document.getElementById("currtime");
let themeChngbtn = document.getElementById("tingu");
let bdy = document.body;
let wrprdrk = document.getElementById("wrapper-drk");
let currTime = document.getElementById("cur-time");
let ampm = document.getElementById("ampm");
let succecs = document.getElementById("set-succes");
let alrmtime;
ringtone = new Audio("iioo.wav")


setInterval(() =>{
    let newD = new Date();
    let hrs = newD.getHours();
    let mnts = newD.getMinutes();
    let scnds = newD.getSeconds();
    if(hrs>12){
        hrs -=12
        hrs = `0${hrs}`
        ampm.innerText = "PM"
    }else{
        ampm.innerText = "AM"
    }
    if(mnts<10){
        mnts = `0${mnts}`
    }
    if(scnds<10){
        scnds = `0${scnds}`
    }
    currentTIme =`${hrs}:${mnts}:`
    currTime.innerText = `${hrs}:${mnts}:${scnds}`
    if(alrmtime == `${hrs}:${mnts}:`){
        ringtone.play()
        // console.log("alarm is ringing")
        ringtone.loop = true;
        
    }
    
},1000)


function setalarm(){
    let time = `${hrsElem.value}:${minElem.value}:`
    alrmtime = time;
    hrsElem.value = "";
    minElem.value = "";

}
document.getElementById("setAlrm").addEventListener("click",()=>{
    if(hrsElem.value == "" || minElem.value == ""){
        alert("please enter valid time")
    }else if(hrsElem.value>24 || minElem.value>60){
        alert("thats not a valid time")
    }
    else{
        setalarm()
        succecs.innerText = "Alarm Set Succesfully!!!"

    setTimeout(()=>{
        succecs.innerText = ""
    },2000)
    
    }
    
    
})

themeChngbtn.addEventListener("click",()=>{
    if(themeChngbtn.classList.contains("bx-sun")){
        themeChngbtn.classList.replace("bx-sun","bx-moon");
        ampm.style.color = "white";
        succecs.style.color = "white";
    }else{
        themeChngbtn.classList.add("bx-sun");
        themeChngbtn.classList.remove("bx-moon");
        ampm.style.color = "black";
        succecs.style.color = "black";
    }
    bdy.classList.toggle("body-drk");
    wrprdrk.classList.toggle("wrapper-drk");
    themeChngbtn.classList.toggle("color-b");
    
})