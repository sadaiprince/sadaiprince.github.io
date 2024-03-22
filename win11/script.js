// lock screen clock Selection
function showTime() {
    const d = new Date();
    // Get hours, minutes
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const date = d.getDate();
    var day = d.getDay();
    //AM or PM
    var interval;
    if (h >= 13) interval = "PM";
    else interval = "AM";
    //getting month
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const monthIndex = d.getMonth();

    const currentMonthText = monthNames[monthIndex];

    //getting day 
    switch (day) {
        case 0: day = "Sun"
            break;
        case 1: day = "Mon"
            break;
        case 2: day = "Tue"
            break;
        case 3: day = "Wed"
            break;
        case 4: day = "Thu"
            break;
        case 5: day = "Fri"
            break;
        case 6: day = "Sat"
            break;

    }
    // Format and display time elements
    //for lockscreen time and date
    document.querySelectorAll(".m")[1].textContent = m.toString().padStart(2, "0") + " :";
    document.querySelectorAll(".h")[1].textContent = (h >= 13 ? h - 12 : h).toString().padStart(2, "0") + " :";
    document.querySelectorAll(".s")[1].textContent = s.toString().padStart(2, "0");
    document.querySelectorAll(".interval")[1].textContent = interval;
    document.querySelectorAll(".dates")[1].textContent = day + " , " + currentMonthText + " " + date;
    //for taskbar time and date
    document.querySelectorAll(".m")[0].textContent = m.toString().padStart(2, "0") + " :";
    document.querySelectorAll(".h")[0].textContent = (h >= 13 ? h - 12 : h).toString().padStart(2, "0") + " :";
    document.querySelectorAll(".s")[0].textContent = s.toString().padStart(2, "0");
    setTimeout(showTime, 1000);
}
showTime();
//    ----------------------------
// before the window home screen
var homeScreen = document.querySelector(".homeScreen");
var removeLockScreen = document.querySelector(".lockScreen");
removeLockScreen.addEventListener('click', () => {
    removeLockScreen.style.transition = "all" + " .2s " + "ease-in-out";
    document.querySelector(".lockClock").style.top = "-100vh";
    document.querySelector(".signInToWindows").style.top = "50%";
    // clearTimeout(setTime);

})

// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
// lock Screen remove in click

document.querySelector(".signInBtn").addEventListener("click", () => {
    removeLockScreen.classList.add("removeLockScreen");
});
//window menu popup on window button click
let winLogo = document.querySelector(".winLogo");
winLogo.addEventListener("click", () => {
    let windowMenu = document.querySelector(".windowMenu");
    windowMenu.style.top = windowMenu.style.top === "60%" ? "135%" : "60%";
})

//power menu popup on power btn click
let powerBtn = document.querySelector(".powerMenu");
powerBtn.addEventListener("click", () => {
    let powerPopUp = document.querySelector(".powerPopUp");
    powerPopUp.style.display = powerPopUp.style.display === "block" ? "none" : "block";
})

//adding click function on apps
//ms-edge
let cross=document.querySelector(".cross");
let minus=document.querySelector(".minus");
let full = document.querySelector(".full");
var edgeFlag = 0;
let msEdgeLogo = document.querySelectorAll(".edgeLogo");
let msEdge = document.querySelector(".edgeWindow");
let msIframe=document.querySelector(".msIframe");
    msEdgeLogo.forEach(Element =>{
        Element.addEventListener('click', () => {
            if(edgeFlag==0){
            msEdge.classList.remove("showFullWindow");
            msIframe.classList.add("showWindow");
            msEdge.classList.add("frame");
            edgeFlag = 1;
            cross.addEventListener("click", function(event) {
                if (edgeFlag==1) {
                    msIframe.classList.remove("showWindow");
                    msEdge.classList.remove("frame");
                    edgeFlag = 0;
                }
              });
              minus.addEventListener("click", function(event) {
                if (edgeFlag==1) {
                    msIframe.classList.remove("showWindow");
                    msEdge.classList.remove("frame");
                    edgeFlag = 0;
                }
              });
              full.addEventListener("click", function(event) {
                if (edgeFlag==1) {
                    msIframe.classList.remove("showWindow");
                    msIframe.classList.add("showFrameFullWindow");
                    msEdge.classList.add("showFullWindow"); 
                }
              });
              
            }
            else if(edgeFlag=1) {
               msIframe.classList.remove("showWindow");
                msEdge.classList.remove("frame");
                
                edgeFlag = 0;
            }
            
              
        })
    })
    
    
// ----------------------------------
