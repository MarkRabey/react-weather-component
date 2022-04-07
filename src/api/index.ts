import axios, {AxiosResponse} from 'axios';
import {Coordinates} from '../models/Coordinates';
import {WeatherResponse} from '../models/Weather';

export const getWeather = async (coordinates: Coordinates, apiKey: string) => {
  try {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}`;

    const {data}: AxiosResponse<WeatherResponse> = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCoordinates = () => ({
  latitude: 44.7834,
  longitude: -79.9164,
});
