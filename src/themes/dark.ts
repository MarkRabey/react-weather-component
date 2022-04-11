import {brandColors} from '.';
import {Theme} from './types';

const darkTheme: Theme = {
  name: 'dark',
  containerStyles: {
    backgroundColor: brandColors.coolGray[600],
    borderColor: brandColors.coolGray[600],
  },
  headingStyles: {
    color: brandColors.lightText,
  },
  subheadingStyles: {
    color: brandColors.violet[400],
  },
  detailStyles: {
    color: brandColors.violet[400],
  },
};

export default darkTheme;
