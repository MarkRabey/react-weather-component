import React from 'react';
import {Image} from 'react-native';

interface WeatherIconProps {
  /**
   * Icon to display
   * */
  icon: string;
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
