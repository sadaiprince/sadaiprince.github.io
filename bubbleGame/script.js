var score = 0;
var randomHit = 0;
var defaultTimer = 60;

function allBubble() {
    var allBubble = ""
    for (var i = 1; i <= 184; i++) {
        var randomNum = Math.ceil(Math.random() * 10);
        allBubble += `<div class="bubble">${randomNum}</div>`
    }
    document.querySelector(".bottomSection").innerHTML = allBubble;
}

function timerCount() {
    var timer = setInterval(function () {
        if (defaultTimer > 0) {
            defaultTimer--;
            document.querySelector("#timer").innerHTML = defaultTimer;
        } else {
            clearInterval(timer)
            document.querySelector(".bottomSection").innerHTML = "Time Up!";
            document.querySelector("#finalScore").innerHTML = `You Have Scored :${score}`;
            document.querySelector("#restartBtn").style.display = "block"
        }
    }, 1000);
}

function hitChange() {
    randomHit = Math.ceil(Math.random() * 10);
    document.querySelector("#hit").textContent = randomHit;
}

function scoreChange() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function pageReload() {
    window.location.reload(true);
}
document.querySelector(".bottomSection").addEventListener("click", function (details) {
    var clickedNumber = Number(details.target.textContent);
    console.log(clickedNumber);
    if (clickedNumber === randomHit) {
        scoreChange();
        hitChange();
        allBubble();
    } else {
        document.querySelector(".bottomSection").innerHTML = "You hit the wrong Number";
        document.querySelector("#finalScore").innerHTML = `You Have Scored :${score}`;
        document.querySelector("#restartBtn").style.display = "block"
    };
});
var countDownTime = 4;
var downCount = setInterval(() => {
    if (countDownTime > 0) {
        countDownTime--;
        document.querySelector("#downCount").innerHTML = ` You have ${countDownTime}s to Start the game.`;
    } else {
        clearInterval(downCount);
        timerCount();
    }
}, 1000);
hitChange();
allBubble();