import { Observer } from './ts/Observer';
import { WeatherData } from './ts/WeatherData';
import { CurrentConditionsDisplay } from './ts/CurrentConditionsDisplay';

class StatisticsDisplay implements Observer {
  id: string;
  private averageTemperatureElement: HTMLElement;
  private maxTemperatureElement: HTMLElement;
  private minTemperatureElement: HTMLElement;

  constructor(id: string, averageTemperatureId: string, maxTemperatureId: string, minTemperatureId: string) {
    this.id = id;
    this.averageTemperatureElement = document.getElementById(averageTemperatureId) as HTMLElement;
    this.maxTemperatureElement = document.getElementById(maxTemperatureId) as HTMLElement;
    this.minTemperatureElement = document.getElementById(minTemperatureId) as HTMLElement;
  }

  updateAverage(averageTemperature: number, maxTemperature: number, minTemperature: number) {
    this.averageTemperatureElement.textContent = `Average Temperature: ${averageTemperature.toFixed(1)}°C`;
    this.maxTemperatureElement.textContent = `Max Temperature: ${maxTemperature}°C`;
    this.minTemperatureElement.textContent = `Min Temperature: ${minTemperature}°C`;
  }
  update(temperature: number, humidity: number, pressure: number) {
  }
}


class ForecastDisplay implements Observer {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  update(temperature: number, humidity: number, pressure: number) {
    console.log('ForecastDisplay', temperature, humidity, pressure);
  }
}

const weatherData = new WeatherData();

const display = new CurrentConditionsDisplay('currentDisplay', 'temperature', 'humidity', 'pressure');
weatherData.subscribe(display);

const statisticsDisplay = new StatisticsDisplay('statisticsDisplay', 'averageTemperature', 'maxTemperature', 'minTemperature');
weatherData.subscribe(statisticsDisplay);

function updateWeather() {
  const temperatureInput = document.getElementById('inputTemperature') as HTMLInputElement;
  const humidityInput = document.getElementById('inputThumidity') as HTMLInputElement;
  const pressureInput = document.getElementById('inputPressure') as HTMLInputElement;

  const averageTemperature = document.getElementById('averageTemperature') as HTMLElement;
  const maxTemperature = document.getElementById('maxTemperature') as HTMLElement;
  const minTemperature = document.getElementById('minTemperature') as HTMLElement;

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
