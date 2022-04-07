import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {Coordinates} from '../../models/Coordinates';
import {WeatherResponse} from '../../models/Weather';
import {getCoordinates, getWeather} from '../../api';

interface Props {
  apiKey: string;
}

const Weather: React.FC<Props> = ({apiKey}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState<WeatherResponse | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const getLocation = async () => {
    const coords = await getCoordinates();
    setCoordinates(coords);
  };

  const getForecast = useCallback(async () => {
    if (coordinates) {
      await setIsLoading(true);
      const data = await getWeather(coordinates, apiKey);
      setForecast(data);
      setIsLoading(false);
    }
  }, [apiKey, coordinates]);

  useEffect(() => {
    if (!forecast) {
      if (coordinates) {
        getForecast();
      } else {
        getLocation();
      }
    }
  }, [coordinates, forecast, getForecast]);

  return forecast ? (
    <View>
      {isLoading ? (
        <Text>...Loading</Text>
      ) : (
        <>
          <Text style={{fontSize: 24}}>Weather for {forecast.name}</Text>
          <Text>Weather for {forecast.name}</Text>
          <Text>Current Temperature: {forecast.main.temp}°c</Text>
          <Text>Forecast High: {forecast.main.temp_max}°c</Text>
          <Text>Forecast Low: {forecast.main.temp_min}°c</Text>
          <Text>Humidity: {forecast.main.humidity}%</Text>
          <Text>Wind Speed: {forecast.wind.speed}%</Text>
        </>
      )}
    </View>
  ) : (
    <Text>Something went wrong...</Text>
  );
};

export default Weather;
