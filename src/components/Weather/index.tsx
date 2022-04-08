import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {Coordinates} from '../../models/Coordinates';
import {WeatherResponse} from '../../models/Weather';
import {getCoordinates, getWeather} from '../../api';
import {useStyles} from '../../hooks/useStyles';

interface Props {
  apiKey: string;
}

const Weather: React.FC<Props> = ({apiKey}) => {
  const styles = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState<WeatherResponse | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const getLocation = async () => {
    await setIsLoading(true);
    const coords = await getCoordinates();
    setCoordinates(coords);
    await setIsLoading(false);
  };

  const getForecast = useCallback(async () => {
    if (coordinates) {
      await setIsLoading(true);
      const data = await getWeather(coordinates, apiKey);
      setForecast(data);
      await setIsLoading(false);
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

  return forecast && !isLoading ? (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.details}>...Loading</Text>
      ) : (
        <>
          <Text style={styles.heading}>Weather for {forecast.name}</Text>
          <Text style={styles.details}>Weather for {forecast.name}</Text>
          <Text style={styles.details}>
            Current Temperature: {forecast.main.temp}°c
          </Text>
          <Text style={styles.details}>
            Forecast High: {forecast.main.temp_max}°c
          </Text>
          <Text style={styles.details}>
            Forecast Low: {forecast.main.temp_min}°c
          </Text>
          <Text style={styles.details}>
            Humidity: {forecast.main.humidity}%
          </Text>
          <Text style={styles.details}>Wind Speed: {forecast.wind.speed}%</Text>
        </>
      )}
    </View>
  ) : (
    <Text>Something went wrong...</Text>
  );
};

export default Weather;
