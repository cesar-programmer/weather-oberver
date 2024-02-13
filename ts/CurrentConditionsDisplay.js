export class CurrentConditionsDisplay {
    constructor(id, temperatureId, humidityId, pressureId) {
        this.id = id;
        this.temperature = document.getElementById(temperatureId);
        this.humidity = document.getElementById(humidityId);
        this.pressure = document.getElementById(pressureId);
    }
    update(temperature, humidity, pressure) {
        this.temperature.textContent = `Temperature: ${temperature.toFixed(1)}°C`;
        this.humidity.textContent = `Humidity: ${humidity.toFixed(1)}%`;
        this.pressure.textContent = `Pressure: ${pressure.toFixed(1)} hPa`;
    }
    updateAverage(averageTemperature, maxTemperature, minTemperature) {
    }
}
