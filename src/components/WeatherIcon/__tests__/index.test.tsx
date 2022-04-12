import React from 'react';
import renderer from 'react-test-renderer';

import WeatherIcon from '..';

describe('WeatherIcon', () => {
  it('renders correctly', () => {
    const result = renderer
      .create(<WeatherIcon icon="10" description="icon" />)
      .toJSON();
    console.log({result});

    expect(result).toMatchSnapshot();
  });
});
