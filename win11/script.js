
// preloader
let preLoader= document.querySelector(".preLoader");
window.addEventListener("load", function () {
    preLoader.style.display = "none";
    preLoader.style.transition = "20ms linear all"
  })


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
var lockScreen = document.querySelector(".lockScreen");
lockScreen.addEventListener('click', () => {
    lockScreen.style.transition = "all" + " .2s " + "ease-in-out";
    document.querySelector(".lockClock").style.top = "-100vh";
    document.querySelector(".signInToWindows").style.top = "50%";

})
let signIn=document.querySelector(".signInBtn");
signIn.addEventListener("click", () => {
    lockScreen.classList.add("removeLockScreen");
});
// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
// lock Screen remove in click


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
var edgecross = document.querySelector(".edgeWindow .cross");
var edgeminus = document.querySelector(".edgeWindow .minus");
var edgefull = document.querySelector(".edgeWindow .full");
var edgeFlag = 0;
let msEdgeLogo = document.querySelectorAll(".edgeLogo");
var msEdge = document.querySelector(".edgeWindow");
var msIframe = document.querySelector(".msIframe");
// window open close function



// ms edge click function
msEdgeLogo.forEach(Element => {
    Element.addEventListener('click', () => {
        if (edgeFlag == 0) {
            msEdge.classList.remove("showFullWindow");
            msIframe.classList.add("showWindow");
            msIframe.style.zIndex = "2";
            msEdge.classList.add("frame");
            edgeFlag = 1;
            edgecross.addEventListener("click", function (event) {
                    msIframe.classList.remove("showWindow");
                    msEdge.classList.remove("frame");
                    edgeFlag = 0;
            });
            edgeminus.addEventListener("click", function (event) {
                    msIframe.classList.remove("showWindow");
                    msEdge.classList.remove("frame");
                    edgeFlag = 0;
            });
            edgefull.addEventListener("click", function (event) {
                    msIframe.classList.remove("showWindow");
                    msIframe.classList.add("showFrameFullWindow");
                    msEdge.classList.add("showFullWindow");
                
            });

        }
        else if (edgeFlag = 1) {
            msIframe.classList.remove("showWindow");
            msEdge.classList.remove("frame");

            edgeFlag = 0;
        }

    });
});

// ms store click function
var storecross = document.querySelector(".msStoreWindow .cross");
var storeminus = document.querySelector(".msStoreWindow .minus");
var storefull = document.querySelector(".msStoreWindow .full");
let msStoreLogo = document.querySelectorAll(".msStoreLogo");
var msStore = document.querySelector(".msStoreWindow");
var msStoreIframe = document.querySelector(".msStoreIframe");
let msStoreFlag = 0;
msStoreLogo.forEach(Element => {
    Element.addEventListener('click', () => {
        if (msStoreFlag == 0) {
            msStore.classList.remove("showFullWindow");
            msStoreIframe.classList.add("showWindow");
            // msStoreIframe.style.zIndex="1";
            msStore.classList.add("frame");
            msStoreFlag = 1;
            storecross.addEventListener("click", function (event) {
                    msStoreIframe.classList.remove("showWindow");
                    msStore.classList.remove("frame");
                    msStoreFlag = 0;
            });
            storeminus.addEventListener("click", function (event) {
                msStoreIframe.classList.remove("showWindow");
                msStore.classList.remove("frame");
                msStoreFlag = 0;
            });
            storefull.addEventListener("click", function (event) {
                    msStoreIframe.classList.remove("showWindow");
                    msStoreIframe.classList.add("showFrameFullWindow");
                    msStore.classList.add("showFullWindow");
            });

        }
        else if (msStoreFlag = 1) {
            msStoreIframe.classList.remove("showWindow");
            msStore.classList.remove("frame");
            msStoreFlag = 0;
        }
    });
});




// ----------------------------------
//power menu setup
// shut down
let shutdown = document.querySelector(".shutdown");
let restart = document.querySelector(".restart");
let lock = document.querySelector(".lock");
shutdown.addEventListener("click",()=>{
    if (confirm("Are you sure???")) {
        let shuttedDown=document.querySelector('.shuttedDown');
        shuttedDown.style.display="block";
        shuttedDown.style.top="0";
        homeScreen.style.backgroundColor="black";
        homeScreen.style.display="none";
        homeScreen.style.opacity="0";
        msEdge.style.display="none";
        msStore.style.display="none";
        document.querySelector(".windowMenu").style.display="none";
        document.getElementsByTagName(body).style.display="none";
        shuttedDown.style.transition = "all" + " 2s " + "ease-in-out";
        
      }
})
// restart
restart.addEventListener("click",()=>{
    setTimeout(() => {
        window.location.reload();
      }, 1000);
})
// lock
let signInFlag=0;
lock.addEventListener('click',()=>{
        signInFlag= 1;
        lockScreen.style.transition = "all" + " .2s " + "ease-in-out";
        lockScreen.style.top="0";
        lockScreen.style.opacity="1";
        lockScreen.classList.remove("removeLockScreen");
        if(signInFlag==1){signIn.addEventListener("click", () => {
            lockScreen.style.top="-100vh";
            lockScreen.classList.add("removeLockScreen");
        });
        }
});
