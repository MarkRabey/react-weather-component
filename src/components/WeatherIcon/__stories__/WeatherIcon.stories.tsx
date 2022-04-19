import React from 'react';
import {storiesOf} from '@storybook/react-native';

import WeatherIcon from '..';

storiesOf('Components/WeatherIcon', module).add('default', () => (
  <WeatherIcon icon="10d" description="Weather Icon" />
));
