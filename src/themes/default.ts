import {Theme} from '.';

const defaultTheme: Theme = {
  name: 'default',
  containerStyles: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#333',
    padding: 12,
  },
  headingStyles: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  detailStyles: {
    fontFamily: 'serif',
    color: '#333',
  },
};

export default defaultTheme;
