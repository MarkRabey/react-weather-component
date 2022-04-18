/* eslint-disable */
import mockAxios from 'jest-mock-axios';
import {getWeather} from '..';
import {getCoordinates} from '../coordinates/index.web';

describe('getWeather', () => {
  afterEach(() => {
    mockAxios.reset();
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
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementation(success => {
        Promise.resolve(
          success({
            coords: {
              latitude: 10,
              longitude: 10,
            },
          }),
        );
      }),
    };
    navigator.geolocation = mockGeolocation;
    const {latitude, longitude} = await getCoordinates();

    expect(latitude).toEqual(10);
    expect(longitude).toEqual(10);
  });
});
/* eslint-enable */
