import {select, text, getArgs} from '../../../utils/storybookControls';
import {WeatherIconProps} from '..';

const argTypes = getArgs<WeatherIconProps>({
  icon: {
    ...select(['11d', '10d', '09d'], '10d', {
      name: 'icon',
      description: 'Icon',
    }),
  },
  description: text('Icon Description'),
});

console.log({argTypes});

export default argTypes;
