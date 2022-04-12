import isEqual from 'lodash.isequal';
import monospaceTheme from '../monospace';

import {themeToStyleSheet} from '../themeToStyleSheet';
import {defaultLightStyles, defaultMonospaceStyles} from '../__mocks__/';

describe('themeToStyles', () => {
  it('should return the default stylesheet for the colorScheme if no theme is passed.', () => {
    const styles = themeToStyleSheet(undefined, 'light');
    expect(isEqual(styles, defaultLightStyles)).toBe(true);
  });
  it('should return the monospace stylesheet when it is passed.', () => {
    const styles = themeToStyleSheet(monospaceTheme, 'light');
    expect(isEqual(styles, defaultMonospaceStyles)).toBe(true);
  });
});
