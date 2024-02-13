export class WeatherData {
    constructor() {
        this.observers = new Map();
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.averageTemperature = 0;
        this.maxTemperature = 0;
        this.minTemperature = 0;
    }
    subscribe(observer) {
        this.observers.set(observer.id, observer);
    }
    unsubscribe(observer) {
        this.observers.delete(observer.id);
    }
    notify() {
        this.observers.forEach(observer => observer.update(this.temperature, this.humidity, this.pressure));
    }
    notifyAverage() {
        this.observers.forEach(observer => observer.updateAverage(this.averageTemperature, this.maxTemperature, this.minTemperature));
    }
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notify();
    }
    setAverageTemperature(averageTemperature, maxTemperature, minTemperature) {
        this.averageTemperature = averageTemperature;
        this.maxTemperature = maxTemperature;
        this.minTemperature = minTemperature;
        this.notifyAverage();
    }
}
