const API_ID = "f479f431386e403458beb899dcfba76c"

function onGeoSuccess(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_ID}`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child")
        const temp = document.querySelector("#weather span:last-child")

        city.innerText = data.name
        temp.innerText = data.main.temp + "°F"
    })
}

function onGeoError() {
    alert("Unable to find your current location.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
