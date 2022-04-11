import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, ColorSchemeName, ActivityIndicator} from 'react-native';

import {Coordinates} from '../../models/Coordinates';
import {WeatherResponse} from '../../models/Weather';
import {getCoordinates, getWeather} from '../../api';
import {useStyles} from '../../hooks/useStyles';
import {Theme} from '../../themes/types';
import WeatherIcon from '../WeatherIcon';
import {SystemTheme, themes} from '../../themes';

interface Props {
  apiKey: string;
  theme?: Theme | SystemTheme;
  colorScheme?: ColorSchemeName;
}

const Weather: React.FC<Props> = ({apiKey, theme}) => {
  const {styles, selectedTheme} = useStyles(theme);

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

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.details}>
          <ActivityIndicator
            size="large"
            color={selectedTheme.detailStyles?.color}
          />
        </Text>
      ) : (
        <>
          {forecast ? (
            <View style={styles.inner}>
              <View style={styles.headingContainer}>
                <Text style={styles.heading}>{forecast.name}</Text>
                <Text style={styles.subheading}>
                  {`High ${Math.round(
                    forecast.main.temp_max,
                  )}°, Low ${Math.round(forecast.main.temp_min)}°`}
                </Text>
              </View>

              <View style={styles.detailsContainer}>
                <WeatherIcon
                  icon={forecast.weather[0].icon}
                  description={forecast.weather[0].description}
                />
                <View>
                  <Text style={[styles.details, {fontSize: 24}]}>
                    {Math.round(forecast.main.temp)}°
                  </Text>
                  <Text style={styles.details}>
                    {forecast.weather[0].description}, feels like{' '}
                    {Math.round(forecast.main.feels_like)}°
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <Text style={styles.details}>Something went wrong...</Text>
          )}
        </>
      )}
    </View>
  );
};

export default Weather;
