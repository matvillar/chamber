const windSpeed = document.getElementById('windSpeed');
const windChillSpan = document.getElementById('windChill');
const temperature = document.getElementById('temp');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weatherDesc');

const weatherURL =
  'https://api.openweathermap.org/data/2.5/weather?lat=34.234726&lon=-84.488297&units=imperial&appid=d4456f801008884b9e94ccb1da5ff921';
async function weatherApiFecth() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      weatherDisplay(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
// display weather results
weatherApiFecth();

function weatherDisplay(weatherData) {
  cityName.innerHTML = `${weatherData.name}`;
  temperature.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  windSpeed.innerHTML = `${weatherData.wind.speed}`;
  const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png

  `;
  const desc = weatherData.weather[0].description;
  const descString = String(desc);
  weatherDesc.textContent = descString;

  const windChillFactor = () => {
    const speedNum = weatherData.wind.speed;
    const tempNum = parseFloat(weatherData.main.temp.toFixed(0));

    if (tempNum <= 50 && speedNum >= 3) {
      const formula =
        35.74 +
        0.6215 * tempNum -
        35.75 * speedNum ** 0.16 +
        0.4275 * tempNum * speedNum ** 0.16;
      windChillSpan.innerHTML = formula.toFixed(0);
    } else {
      windChillSpan.innerHTML = 'N/A';
    }
  };

  windChillFactor();
  weatherIcon.setAttribute('src', icon);
  weatherIcon.setAttribute('alt', desc);
}
weatherDisplay();
