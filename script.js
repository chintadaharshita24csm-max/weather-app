const apiKey = "f31f8b63a60046d877d6879e3ac0fcdb";

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
                <p>${data.main.temp} °C</p>
                <p>${data.weather[0].main}</p>
            `;
        })
        .catch(() => {
            weather.innerHTML = "❌ City not found";
        });
});
