// lock screen clock Selection
function showTime() {
    const d = new Date();
    // Get hours, minutes
    const h = d.getHours();
    const m = d.getMinutes();
    const date = d.getDate();
    const month = d.getMonth();
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
    document.querySelector(".h").textContent = (h >= 13 ? h - 12 : h).toString().padStart(2, "0") + " :";
    document.querySelector(".m").textContent = m.toString().padStart(2, "0");
    document.querySelector(".interval").textContent = interval;
    document.querySelector(".dates").textContent = day + " , " + currentMonthText + " " + date;
    setTimeout(showTime, 1000);
}
showTime();
//    ----------------------------
// before the window home screen
var removeLockScreen = document.querySelector(".lockScreen");
removeLockScreen.addEventListener('click', ()=>{
removeLockScreen.style.backgroundImage = "url('assets/bluredLockScreenWallpaper.jpg')";
    document.querySelector(".lockClock").style.display="none";
    document.querySelector(".signInToWindows").style.display="block";
    

})
// lock Screen remove in click
 
    document.querySelector(".signInBtn").addEventListener("click",()=>{
        removeLockScreen.classList.add("removeLockScreen");
        
        document.querySelector(".signInToWindows img").style.display="none";
    })
