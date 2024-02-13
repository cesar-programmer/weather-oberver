import { Observer } from './Observer';
import { Subject } from './Subject';

export class WeatherData implements Subject {
  private observers: Map<string, Observer> = new Map();
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  private averageTemperature: number = 0;
  private maxTemperature: number = 0;
  private minTemperature: number = 0;
  private forecast: string = '';

  subscribe(observer: Observer) {
    this.observers.set(observer.id, observer);
  }

  unsubscribe(observer: Observer) {
    this.observers.delete(observer.id);
  }

  notify() {
    this.observers.forEach(observer => observer.update(this.temperature, this.humidity, this.pressure));
  }

  notifyAverage() {
    this.observers.forEach(observer => observer.updateAverage(this.averageTemperature, this.maxTemperature, this.minTemperature));
  }

  notifyForecast() {
    this.observers.forEach(observer => observer.updateForecast(this.forecast));
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notify();
  }

  setAverageTemperature(averageTemperature: number, maxTemperature: number, minTemperature: number) {
    this.averageTemperature = averageTemperature;
    this.maxTemperature = maxTemperature;
    this.minTemperature = minTemperature;
    this.notifyAverage();
  }

  setForecast(forecast: string) {
    this.forecast = forecast;
    this.notifyForecast();
  }
}
