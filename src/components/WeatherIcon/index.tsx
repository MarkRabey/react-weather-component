import React from 'react';
import {Image} from 'react-native';

export interface WeatherIconProps {
  /**
   * The icon to display.
   *
   * See https://openweathermap.org/weather-conditions#Icon-list for all available icons
   */
  icon: string;
  /**
   * Weather description, used for image `accessibilityLabel`
   */
  description: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({icon, description}) => (
  <Image
    source={{
      uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    }}
    accessibilityLabel={description}
    style={{width: 50, height: 50}}
  />
);

export default WeatherIcon;
