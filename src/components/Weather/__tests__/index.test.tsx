import React from 'react';
import renderer from 'react-test-renderer';

import Weather from '..';
import {Theme} from '../../../themes/types';
import {mockStyles} from '../../../themes/__mocks__';

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
