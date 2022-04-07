import React, {useCallback, useEffect, useState} from 'react';
import {Text} from 'react-native';

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

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <Text>Weather: {forecast?.main.temp}</Text>
  );
};

export default Weather;
