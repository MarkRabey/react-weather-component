/* eslint-disable */
import mockAxios from 'jest-mock-axios';
import {getWeather} from '..';
import {getCoordinates} from '../coordinates/index.web';

describe('getWeather', () => {
  let consoleSpy: jest.SpyInstance;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockReturnValue(undefined);
  });
  afterEach(() => {
    mockAxios.reset();
    consoleSpy.mockRestore();
  });

  it('returns weather data on success', async () => {
    mockAxios.get.mockResolvedValueOnce({});
    const result = await getWeather(
      {latitude: 0, longitude: 0},
      'klkjdflaksdjfoi',
    );

    expect(mockAxios.get).toHaveBeenCalledWith(
      'http://api.openweathermap.org/data/2.5/weather?units=metric&lat=0&lon=0&appid=klkjdflaksdjfoi',
    );
  });

  it('returns `null` on failure', async () => {
    const message = 'Network Error';
    mockAxios.get.mockRejectedValueOnce(new Error(message));
    const result = await getWeather(
      {latitude: 0, longitude: 0},
      'klkjdflaksdjfoi',
    );

    expect(mockAxios.get).toHaveBeenCalledWith(
      'http://api.openweathermap.org/data/2.5/weather?units=metric&lat=0&lon=0&appid=klkjdflaksdjfoi',
    );
    expect(result).toBe(null);
  });
});

describe('getCoordinates', () => {
  const defaultGeolocation = navigator.geolocation;
  it('returns a set of coordinates', async () => {
    const {latitude, longitude} = await getCoordinates();

    expect(latitude).toEqual(10);
    expect(longitude).toEqual(10);
  });
});
/* eslint-enable */
