import {WeatherStyles} from '../types';

export const mockStyles: WeatherStyles = {
  container: {},
  headingContainer: {},
  heading: {},
  subheading: {},
  inner: {},
  detailsContainer: {},
  details: {},
};

export const defaultLightStyles: WeatherStyles = {
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#f9fafb',
    borderColor: '#e5e7eb',
  },
  inner: {},
  headingContainer: {flex: 1, marginBottom: 6},
  heading: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  subheading: {fontSize: 12, color: '#8b5cf6'},
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  details: {color: '#8b5cf6', fontSize: 12},
};

export const defaultMonospaceStyles: WeatherStyles = {
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#f9fafb',
    borderColor: '#e5e7eb',
  },
  inner: {},
  headingContainer: {flex: 1, marginBottom: 6},
  heading: {
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  subheading: {fontSize: 12, color: '#8b5cf6', fontFamily: 'monospace'},
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  details: {color: '#8b5cf6', fontSize: 12, fontFamily: 'monospace'},
};
