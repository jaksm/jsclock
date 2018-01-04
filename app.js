let hourHand = document.getElementsByClassName('hour-hand')[0]
let minHand = document.getElementsByClassName('min-hand')[0]
let secHand = document.getElementsByClassName('sec-hand')[0]
let display = document.getElementById('display')

let now = new Date

const rotateVal = 270

let tick = () => {
  now = new Date
  let sec = now.getSeconds()
  let secDeg = ((sec / 60) * 360) + rotateVal
  secHand.style.transform = `rotate(${secDeg}deg)`

  let min = now.getMinutes()
  let minDeg = ((min / 60) * 360) + rotateVal
  minHand.style.transform = `rotate(${minDeg}deg)`

  let hour = now.getHours()
  let hourDeg = ((hour / 12) * 360) + rotateVal
  hourHand.style.transform = `rotate(${hourDeg}deg)`

  display.innerText = `${hour}:${min}:${sec}` 
}

setInterval(tick, 1000)

/* 

ceo krug = 360deg
-----------------
#sec
  360/60 = rotate by 6deg every 1s
#min
  360/60 = rotate by 6deg every 1s
#hour
  360/12 = rotate by 30deg every 1hr

*/