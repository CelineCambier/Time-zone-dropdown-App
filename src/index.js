function showTimeZone(event) {
    if (event.target.value === "Europe/Paris") {
        let parisTimeZone = moment()
            .tz("Europe/Paris")
            .format("dddd, MMMM D, YYYY h:mm a");
        alert(`It is ${parisTimeZone} in Paris, France.`);
    }
    if (event.target.value === "Asia/Tokyo") {
        let tokyoTimeZone = moment()
            .tz("Asia/Tokyo")
            .format("dddd, MMMM D, YYYY h:mm a");
        alert(`It is ${tokyoTimeZone} in Tokyo, Japan.`);
    }
    if (event.target.value === "Australia/Sydney") {
        let sydneyTimeZone = moment()
            .tz("Australia/Sydney")
            .format("dddd, MMMM D, YYYY h:mm a");
        alert(`It is ${sydneyTimeZone} in Sydney, Australia.`);
    }
}

let cityElement = document.querySelector("#countries");
cityElement.addEventListener("change", showTimeZone);

