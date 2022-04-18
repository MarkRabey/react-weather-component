import {renderHook} from '@testing-library/react-hooks';
import {useStyles} from '../useStyles';

describe('useStyles', () => {
  it('should return the light theme by default based on colorScheme', () => {
    const {result} = renderHook(() => useStyles());
    expect(result.current.selectedTheme.name).toEqual('light');
  });

  it('should return the theme named "monospace"', () => {
    const {result} = renderHook(() => useStyles('monospace'));
    expect(result.current.selectedTheme.name).toEqual('monospace');
  });
});
