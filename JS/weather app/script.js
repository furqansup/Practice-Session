const weatherIcons = {
  Haze: "images/haze.png",
  Clear: "images/clear.png",
  Clouds: "images/cloudy.png",
  Atmosphere: "images/atmosphere.png",
  Drizzle: "images/drizzle.png",
  Snow: "images/snow.png",
  Rain: "images/raining.png",
  Thunderstorm: "images/thunder.png",
  Mist: "images/fog.png",
};

const apiKey = "16c3ebfd3c3467033c3c45f463500fb1";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const res = await fetch(apiUrl + city);
    const data = await res.json();

    if (res.status === 404) {
      throw new Error("City not found");
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${Math.round(
      data.wind.speed
    )} km/h`;
    document.querySelector(".weather-type").innerHTML =
      data.weather[0].description;

    const weatherType = data.weather[0].main;

    if (weatherIcons.hasOwnProperty(weatherType)) {
      weatherIcon.src = weatherIcons[weatherType];
    } else {
      weatherIcon.src = "images/default.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    document.querySelector(".error").innerHTML = error.message;
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
}

const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  const searchBox = document.querySelector(".search input").value.trim(); // Trim whitespace
  if (searchBox) {
    checkWeather(searchBox);
  } else {
    alert("Please enter a city name");
  }
});
