import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, ColorSchemeName, ActivityIndicator} from 'react-native';

import {WeatherResponse} from '../../models/Weather';
import {getWeather} from '../../api';
import {useStyles} from '../../hooks/useStyles';
import {Theme} from '../../themes/types';
import WeatherIcon from '../WeatherIcon';
import {SystemTheme} from '../../themes';
import {useCoordinates} from '../../hooks/useCoordinates';

interface Props {
  apiKey: string;
  theme?: Theme | SystemTheme;
}

const Weather: React.FC<Props> = ({apiKey, theme}) => {
  const {styles, selectedTheme} = useStyles(theme);

  const {coordinates, isLoading} = useCoordinates();
  const [forecast, setForecast] = useState<WeatherResponse | null>(null);

  const getForecast = useCallback(async () => {
    if (coordinates) {
      const data = await getWeather(coordinates, apiKey);
      setForecast(data);
    }
  }, [apiKey, coordinates]);

  useEffect(() => {
    if (coordinates && !isLoading) {
      getForecast();
    }
  }, [coordinates, getForecast, isLoading]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.details} testID="loading">
          <ActivityIndicator
            size="large"
            color={selectedTheme.detailStyles?.color}
            accessibilityLabel="loading"
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
