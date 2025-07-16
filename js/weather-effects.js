export function applyWeatherEffect(condition) {
  const app = document.querySelector('body')

  clearWeatherClasses()

  switch (condition.toLowerCase()) {
    case 'clear':
      app.classList.add('weather-clear')
      addSunEffect()
      break
    case 'rain':
      app.classList.add('weather-rain')
      break
    case 'snow':
      app.classList.add('weather-snow')
      break
    case 'clouds':
      app.classList.add('weather-cloud')
      break
    case 'fog':
    case 'mist':
    case 'haze':
      app.classList.add('weather-fog')
      break
    case 'thunderstorm':
      app.classList.add('weather-thunderstorm')
      break
    default:
      break
  }
}

function clearWeatherClasses() {
  document.body.className = document.body.className
    .split(' ')
    .filter(cls => !cls.startsWith('weather-'))
    .join(' ')

  removeSunEffect()
}

function addSunEffect() {
  if (!document.querySelector('.sun-rays')) {
    const sun = document.createElement('div')
    sun.classList.add('sun-rays')
    document.body.appendChild(sun)
  }
}

function removeSunEffect() {
  const sun = document.querySelector('.sun-rays')
  if (sun) sun.remove()
}
