myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let input = document.getElementById("info").value;
    let aipkey = "ceb30ad71c0d237dc19802699d7cb7c2";

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${aipkey}&units=metric`)
        .then((res) => {
            console.log(res);
            document.getElementById("display").innerHTML = `<h3> <h3>Weather Info</h3>
            City: ${res.data.name} <br>
            Temperature: ${res.data.main.temp} °C <br> 
            Temperature (Min): ${res.data.main.temp_min} °C <br>
            Temperature (Max): ${res.data.main.temp_max} °C <br>
            Humidity: ${res.data.main.humidity} <br> Pressure: ${res.data.main.pressure} </h3>`;

        })
        .catch((error) => {
            console.log(error);
        })
});