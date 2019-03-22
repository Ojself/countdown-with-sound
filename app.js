var audio = new Audio('./gong.mp3');

const c = document.getElementById('countdown')
let time = 600 // 10 min

const interval = setInterval(() => {
    if (time <= 0) {
        clearInterval(interval)
        c.innerHTML = "LET'S MOVE ON"
        audio.play();
    } else {
        c.innerHTML = time--
    }
}, 1000)