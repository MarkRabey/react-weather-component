import {useColorScheme} from 'react-native';
import {renderHook} from '@testing-library/react-hooks';
import {useStyles} from '../useStyles';
import {useCoordinates} from '../useCoordinates';

jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  useColorScheme: jest.fn(),
}));

const mockUseColorScheme = useColorScheme as jest.Mock;

jest.mock('../../api/coordinates', () => ({
  getCoordinates: () =>
    Promise.resolve({
      latitude: 0,
      longitude: 0,
    }),
}));

describe('useStyles', () => {
  it('should return the light theme by default based on colorScheme', () => {
    const {result} = renderHook(() => useStyles());
    expect(result.current.selectedTheme.name).toEqual('light');
  });

  it('should return the dark theme by default based on colorScheme', () => {
    mockUseColorScheme.mockReturnValue('dark');
    const {result} = renderHook(() => useStyles());
    expect(result.current.selectedTheme.name).toEqual('dark');
  });

  it('should return the theme named "monospace"', () => {
    const {result} = renderHook(() => useStyles('monospace'));
    expect(result.current.selectedTheme.name).toEqual('monospace');
  });

  it('should return the styles for the theme that is passed', () => {
    const {result} = renderHook(() =>
      useStyles({
        name: 'test-theme',
        containerStyles: {
          width: '10%',
        },
      }),
    );
    expect(result.current.selectedTheme.name).toEqual('test-theme');
  });
});

describe('useCoordinates', () => {
  it('should return loading status and coordinates', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useCoordinates());
    expect(result.current.isLoading).toBe(true);
    expect(result.current.coordinates).toBeNull();
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.coordinates).toStrictEqual({
      latitude: 0,
      longitude: 0,
    });
  });
});
