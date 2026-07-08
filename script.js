const apiKey = "YOUR_API_KEY";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const weather = document.getElementById("weather");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            weather.innerHTML = `
                <h2>${data.name}</h2>
                <h3>${data.main.temp}°C</h3>
                <p>${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(() => {
            weather.innerHTML = "<p>City not found!</p>";
        });
});
