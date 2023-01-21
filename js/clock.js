const clock = document.querySelector("h2#clock")

function timeFormatting(num) {
    num = num.toString()
    if (num < 10) {
        num = `0${num}`
    }
    return num
}
function getClock() {
    const date = new Date()

    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()

    hours = timeFormatting(hours)
    mins = timeFormatting(mins)
    secs = timeFormatting(secs)

    const CLOCK = `${hours}:${mins}:${secs}`

    clock.innerText = CLOCK
}

getClock()
setInterval(getClock, 1000)
