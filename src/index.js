
function updateTime() {

    // Lisbon
    let lisbonElement = document.querySelector("#lisbon");
    if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // Paris
    let parisElement = document.querySelector("#paris");
    if (parisElement){
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // Moscow
    let moscowElement = document.querySelector("#moscow");
    if (moscowElement){
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowTime = moment().tz("Europe/Moscow");

    moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
    moscowTimeElement.innerHTML = moscowTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(" A")}</small></div>
    </div>
    <a href="index.html" class="goBack">⇦ All Cities</a>
    `;
    setTimeout(() => {
        updateCity(event)
    }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);