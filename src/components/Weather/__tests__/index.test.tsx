import React from 'react';
import renderer from 'react-test-renderer';

import Weather from '..';
import {Theme, WeatherStyles} from '../../../themes/types';

// console.log({hooks});
const mockStyles: WeatherStyles = {
  container: {},
  headingContainer: {},
  heading: {},
  subheading: {},
  inner: {},
  detailsContainer: {},
  details: {},
};

const mockSelectedTheme: Theme = {name: 'testing'};
jest.mock('../../../hooks/useStyles', () => ({
  useStyles: () => ({
    styles: mockStyles,
    selectedTheme: mockSelectedTheme,
  }),
}));

describe('WeatherComponent', () => {
  test('renders', () => {
    const result = renderer.create(<Weather apiKey="" />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
