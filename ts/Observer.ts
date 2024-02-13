export interface Observer {
  id: string;
  update: (temperature: number, humidity: number, pressure: number) => void;
  updateAverage: (averageTemperature: number, maxTemperature: number, minTemperature: number) => void;
}