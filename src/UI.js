import { weatherData, getWeatherData } from "./app";

export default function init() {
  addInitialEventListeners();
}

function addInitialEventListeners() {
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector("#search");

  searchBtn.addEventListener("click", handleBtnClick);
  searchInput.addEventListener("keydown", handleKeyDown);
}

function renderData(isFahrenheit) {
  const resultsContainer = document.querySelector(".results-container");
  resultsContainer.innerHTML = "";
  if (!weatherData.location) {
    const p = document.createElement("p");
    p.textContent = "Error: Could not retrieve weather data for that location.";
    resultsContainer.append(p);
    return;
  }

  const location = document.createElement("p");
  location.textContent = `Location: ${weatherData.location}`;
  resultsContainer.append(location);

  const temperature = document.createElement("p");
  temperature.textContent = `Temperature: ${weatherData.temp}°${
    isFahrenheit ? "F" : "C"
  }`;
  resultsContainer.append(temperature);

  const conditions = document.createElement("p");
  conditions.textContent = `Conditions: ${weatherData.conditions}`;
  resultsContainer.append(conditions);

  const windSpeed = document.createElement("p");
  windSpeed.textContent = `Wind Speed: ${weatherData.windSpeed} m/s`;
  resultsContainer.append(windSpeed);

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
  resultsContainer.append(humidity);
}

function showLoading() {
  const loadingElement = document.querySelector(".loading");
  loadingElement.style.display = "block";
}

function hideLoading() {
  const loadingElement = document.querySelector(".loading");
  loadingElement.style.display = "none";
}

let isFahrenheit = false;

const toggleButton = document.querySelector("#units-toggle");
toggleButton.addEventListener("click", handleUnitsToggle);

function handleUnitsToggle() {
  isFahrenheit = !isFahrenheit;
  getWeatherData();
}

async function handleBtnClick() {
  showLoading();
  const searchValue = document.querySelector("#search").value;
  await getWeatherData(searchValue, isFahrenheit ? "imperial" : "metric");
  hideLoading();
  renderData(isFahrenheit);
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleBtnClick();
  }
}
