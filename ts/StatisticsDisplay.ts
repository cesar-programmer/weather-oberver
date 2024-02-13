import { Observer } from './Observer';

export class StatisticsDisplay implements Observer {
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
