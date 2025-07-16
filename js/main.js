import { applyWeatherEffect } from './weather-effects.js'

const API_KEY = '80d35c72bc18da105b6ebf2215571e91'

const cityInput = document.getElementById('city-input')
const searchBtn = document.getElementById('search-btn')
const cityNameEl = document.getElementById('city-name')
const tempEl = document.getElementById('temperature')
const descEl = document.getElementById('description')
const iconEl = document.getElementById('weather-icon')
const weatherInfoEl = document.querySelector('.weather-info')
const errorMsgEl = document.getElementById('error-msg')
const loaderEl = document.getElementById('loader')
const locationBtn = document.getElementById('location-btn')

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim()
  if (!city) return
  fetchWeather(city)
})

locationBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser')
    return
  }
  navigator.geolocation.getCurrentPosition(success, error)
})

function success(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  fetchWeatherByCoords(lat, lon)
}

function error() {
  alert('Unable to retrieve your location')
}

function fetchWeather(city) {
  showLoader()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=en`
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error()
      return res.json()
    })
    .then(data => updateWeatherUI(data))
    .catch(() => showError())
    .finally(hideLoader)
}

function fetchWeatherByCoords(lat, lon) {
  showLoader()

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error()
      return res.json()
    })
    .then(data => updateWeatherUI(data))
    .catch(() => showError())
    .finally(hideLoader)
}

function updateWeatherUI(data) {
  errorMsgEl.classList.add('hidden')
  weatherInfoEl.classList.remove('hidden')

  cityNameEl.textContent = `${data.name}, ${data.sys.country}`
  tempEl.textContent = `🌡️ ${Math.round(data.main.temp)}°C`
  descEl.textContent = data.weather[0].description
  iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  iconEl.alt = data.weather[0].main

  applyWeatherEffect(data.weather[0].main.toLowerCase())
}

function showError() {
  weatherInfoEl.classList.add('hidden')
  errorMsgEl.classList.remove('hidden')
}

function showLoader() {
  loaderEl.classList.remove('hidden')
  weatherInfoEl.classList.add('hidden')
  errorMsgEl.classList.add('hidden')
}

function hideLoader() {
  loaderEl.classList.add('hidden')
}
