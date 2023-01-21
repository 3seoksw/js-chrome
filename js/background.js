const images = ["candle.JPG", "donut.JPG", "ggami-1.jpeg", "spain.jpeg"]

const chosenImg = images[Math.floor(Math.random() * images.length)]

const img = document.createElement("img")

img.src = `img/${chosenImg}`

document.body.appendChild(img)
