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
  removeRainEffect();
  removeSnowEffect();
  removeFogEffect() ;
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

// Rain
function addRainEffect() {
  if (!document.querySelector('.rain-overlay')) {
    const rainImg = document.createElement('img')
    rainImg.src = 'img/rain.jpg'
    rainImg.alt = 'rain'
    rainImg.classList.add('rain-overlay')
    document.body.appendChild(rainImg)
  }
}
function removeRainEffect() {
  const rain = document.querySelector('.rain-overlay')
  if (rain) rain.remove()
}

// Thunderstorm
function addThunderEffect() {
  if (!document.querySelector('.thunderstorm-overlay')) {
    const thunderImg = document.createElement('img')
    thunderImg.src = 'img/thunderstorm.jpg'
    thunderImg.alt = 'thunderstorm'
    thunderImg.classList.add('thunderstorm-overlay')
    document.body.appendChild(thunderImg)
  }
}

function removeThunderEffect() {
  const thunder = document.querySelector('.thunderstorm-overlay')
  if (thunder) thunder.remove()
}

// Snow 
function addSnowEffect() {
  if (!document.querySelector('.snow-overlay')) {
    const snowImg = document.createElement('img')
    snowImg.src = 'img/snow.jpg'
    snowImg.alt = 'snow'
    snowImg.classList.add('snow-overlay')
    document.body.appendChild(snowImg)
  }
}
function removeSnowEffect() {
  const snow = document.querySelector('.snow-overlay')
  if (snow) snow.remove()
}

// Fog
function addFogEffect() {
  if (!document.querySelector('.fog-overlay')) {
    const fogImg = document.createElement('img')
    fogImg.src = 'img/fog.jpg'
    fogImg.alt = 'fog'
    fogImg.classList.add('fog-overlay')
    document.body.appendChild(fogImg)
  }
}
function removeFogEffect() {
  const fog = document.querySelector('.fog-overlay')
  if (fog) fog.remove()
}