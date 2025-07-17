export function applyWeatherEffect(condition) {
  const app = document.querySelector("body");

  clearWeatherClasses();

  const normalized = condition.toLowerCase();

  if (normalized.includes("clear")) {
    app.classList.add("weather-clear");
    addSunEffect();
  } else if (
    normalized.includes("rain") ||
    normalized.includes("drizzle") ||
    normalized.includes("shower")
  ) {
    app.classList.add("weather-rain");
    addRainEffect(); 
  } else if (
    normalized.includes("snow") ||
    normalized.includes("sleet") ||
    normalized.includes("blizzard")
  ) {
    app.classList.add("weather-snow");
    addSnowEffect(); 
  } else if (normalized.includes("cloud")) {
    app.classList.add("weather-cloud");
    addCloudEffect();
  } else if (
    normalized.includes("fog") ||
    normalized.includes("mist") ||
    normalized.includes("haze") ||
    normalized.includes("smoke") ||
    normalized.includes("dust") ||
    normalized.includes("sand") ||
    normalized.includes("ash")
  ) {
    app.classList.add("weather-fog");
    addFogEffect(); 
  } else if (
    normalized.includes("thunderstorm") ||
    normalized.includes("storm")
  ) {
    app.classList.add("weather-thunderstorm");
    addThunderEffect(); 
  }
}

function clearWeatherClasses() {
  document.body.className = document.body.className
    .split(" ")
    .filter((cls) => !cls.startsWith("weather-"))
    .join(" ");

  removeSunEffect();
  removeCloudEffect();
}

// Clear weather
function addSunEffect() {
  if (!document.querySelector(".sun-rays")) {
    const clearImg = document.createElement("img");
    clearImg.src = "img/clear.jpg";
    clearImg.alt = "clear";
    clearImg.classList.add("sun-rays");
    document.body.appendChild(clearImg);
  }
}
function removeSunEffect() {
  const clear = document.querySelector(".sun-rays");
  if (clear) clear.remove();
}

// Cloud
function addCloudEffect() {
  if (!document.querySelector(".cloud-float")) {
    const cloudImg = document.createElement("img")
    cloudImg.src = "img/cloud.jpg" 
    cloudImg.alt = "cloud"
    cloudImg.classList.add("cloud-float")
    document.body.appendChild(cloudImg)
  }
}

function removeCloudEffect() {
  const cloud = document.querySelector(".cloud-float")
  if (cloud) cloud.remove()
}
