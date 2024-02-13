import { WeatherData } from './ts/WeatherData.js';
import { CurrentConditionsDisplay } from './ts/CurrentConditionsDisplay.js';
class StatisticsDisplay {
    constructor(id, averageTemperatureId, maxTemperatureId, minTemperatureId) {
        this.id = id;
        this.averageTemperatureElement = document.getElementById(averageTemperatureId);
        this.maxTemperatureElement = document.getElementById(maxTemperatureId);
        this.minTemperatureElement = document.getElementById(minTemperatureId);
    }
    updateAverage(averageTemperature, maxTemperature, minTemperature) {
        this.averageTemperatureElement.textContent = `Average Temperature: ${averageTemperature.toFixed(1)}°C`;
        this.maxTemperatureElement.textContent = `Max Temperature: ${maxTemperature}°C`;
        this.minTemperatureElement.textContent = `Min Temperature: ${minTemperature}°C`;
    }
    update(temperature, humidity, pressure) {
    }
}
class ForecastDisplay {
    constructor(id) {
        this.id = id;
    }
    update(temperature, humidity, pressure) {
        console.log('ForecastDisplay', temperature, humidity, pressure);
    }
}
const weatherData = new WeatherData();
const display = new CurrentConditionsDisplay('currentDisplay', 'temperature', 'humidity', 'pressure');
weatherData.subscribe(display);
const statisticsDisplay = new StatisticsDisplay('statisticsDisplay', 'averageTemperature', 'maxTemperature', 'minTemperature');
weatherData.subscribe(statisticsDisplay);
function updateWeather() {
    const temperatureInput = document.getElementById('inputTemperature');
    const humidityInput = document.getElementById('inputThumidity');
    const pressureInput = document.getElementById('inputPressure');
    const averageTemperature = document.getElementById('averageTemperature');
    const maxTemperature = document.getElementById('maxTemperature');
    const minTemperature = document.getElementById('minTemperature');
    const temperature = parseFloat(temperatureInput.value);
    const humidity = parseFloat(humidityInput.value);
    const pressure = parseFloat(pressureInput.value);
    const avrTemperature = 40;
    const maTemperature = 40;
    const miTemperature = 40;
    weatherData.setAverageTemperature(avrTemperature, maTemperature, miTemperature);
    weatherData.setMeasurements(temperature, humidity, pressure);
}
const addWeatherButton = document.getElementById('addWeather');
if (addWeatherButton) {
    addWeatherButton.addEventListener('click', updateWeather);
}
