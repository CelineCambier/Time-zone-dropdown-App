function showDate(event) {
        if (event.target.value.length > 0) {
            let currentTime = moment().tz(event.target.value).format("dddd, MMMM D, YYYY h:mm a");
            alert(`It is ${currentTime} in ${event.target.value}.`);
        } 
    }

    let cityElement = document.querySelector("#cities");
    cityElement.addEventListener("change", showDate);


