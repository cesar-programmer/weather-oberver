import { Observer } from './ts/Observer';
import { WeatherData } from './ts/WeatherData';
import { CurrentConditionsDisplay } from './ts/CurrentConditionsDisplay';
import { StatisticsDisplay } from './ts/StatisticsDisplay';

class ForecastDisplay implements Observer {
  id: string;
  private message: HTMLElement;

  constructor(id: string, messageId: string) {
    this.id = id;
    this.message = document.getElementById(messageId) as HTMLElement;
  }

  updateForecast(forecast: string) {
    this.message.textContent = `Forecast: ${forecast}`;
  }

  update(temperature: number, humidity: number, pressure: number) {
  }
  updateAverage(averageTemperature: number) {
  }

}

const weatherData = new WeatherData();

const display = new CurrentConditionsDisplay('currentDisplay', 'temperature', 'humidity', 'pressure');
weatherData.subscribe(display);

const statisticsDisplay = new StatisticsDisplay('statisticsDisplay', 'averageTemperature', 'maxTemperature', 'minTemperature');
weatherData.subscribe(statisticsDisplay);

const forecastDisplay = new ForecastDisplay('forecastDisplay', 'forecast');
weatherData.subscribe(forecastDisplay);

function updateWeather() {

  const temperature = 68;
  const humidity = 23;
  const pressure = 12;

  const avrTemperature = 60;
  const maTemperature = 70;
  const miTemperature = 50;

  let forecast = ' Is Sunny enjoy the day!';
  if(temperature > 75) {
    forecast = 'Hot';
  }
  if(temperature < 65) {
    forecast = 'Cold';
  }


  weatherData.setAverageTemperature(avrTemperature, maTemperature, miTemperature);
  weatherData.setMeasurements(temperature, humidity, pressure);
  weatherData.setForecast(forecast);
}

const addWeatherButton = document.getElementById('addWeather');
if (addWeatherButton) {
  addWeatherButton.addEventListener('click', updateWeather);
}
