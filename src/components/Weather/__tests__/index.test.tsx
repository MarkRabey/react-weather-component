import React from 'react';
import renderer from 'react-test-renderer';
import {act, render} from '@testing-library/react-native';

import Weather from '..';
import * as api from '../../../api';
import {useCoordinates} from '../../../hooks/useCoordinates';
import {Theme} from '../../../themes/types';
import {mockStyles} from '../../../themes/__mocks__';

// const mockSelectedTheme: Theme = {name: 'testing'};
jest.mock('../../../hooks/useCoordinates', () => ({
  useCoordinates: jest.fn(),
}));

jest.mock('../../../api/coordinates', () => ({
  getCoordinates: () =>
    Promise.resolve({
      latitude: 0,
      longitude: 0,
    }),
}));

let getWeatherSpy: jest.SpyInstance;
let consoleSpy: jest.SpyInstance;
const mockUseCoordinates = useCoordinates as jest.Mock;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'error');
  consoleSpy.mockReturnValue(undefined);

  getWeatherSpy = jest.spyOn(api, 'getWeather');
});

afterEach(() => {
  consoleSpy.mockRestore();
  getWeatherSpy.mockRestore();
});

describe('WeatherComponent - forecast', () => {
  beforeEach(() => {
    mockUseCoordinates.mockReturnValueOnce({
      isLoading: false,
      coordinates: {latitude: 0, longitude: 0},
    });
  });
  it('renders correctly', () => {
    const result = renderer.create(<Weather apiKey="" />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
