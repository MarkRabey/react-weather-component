import {brandColors} from '.';
import {Theme} from './types';

const lightTheme: Theme = {
  name: 'light',
  containerStyles: {
    backgroundColor: brandColors.coolGray[50],
    borderColor: brandColors.coolGray[200],
  },
  headingStyles: {
    color: brandColors.darkText,
  },
  subheadingStyles: {
    color: brandColors.violet[500],
  },
  detailStyles: {
    color: brandColors.violet[500],
  },
};

export default lightTheme;
