import { Observer } from './Observer';

export class CurrentConditionsDisplay implements Observer {
  id: string;
  private temperature: HTMLElement;
  private humidity: HTMLElement;
  private pressure: HTMLElement;

  constructor(id: string, temperatureId: string, humidityId: string, pressureId: string) {
    this.id = id;
    this.temperature = document.getElementById(temperatureId) as HTMLElement;
    this.humidity = document.getElementById(humidityId) as HTMLElement;
    this.pressure = document.getElementById(pressureId) as HTMLElement;
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature.textContent = `Temperature: ${temperature.toFixed(1)}°C`;
    this.humidity.textContent = `Humidity: ${humidity.toFixed(1)}%`;
    this.pressure.textContent = `Pressure: ${pressure.toFixed(1)} hPa`;
  }
  updateAverage(averageTemperature: number, maxTemperature: number, minTemperature: number) {
  }
}