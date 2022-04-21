import icons from './icons';

const iconLabels = {};

for (let index = 0; index < icons.length; index++) {
  const element = icons[index];
  iconLabels[`${element.iconCode}`] = element.name;
}

const argTypes = {
  icon: {
    defaultValue: icons[0].iconCode,
    control: {
      type: 'select',
      options: icons.map(x => x.iconCode),
      labels: iconLabels,
    },
  },
  variant: {
    description:
      'Each icon has a "day" or "night" variant. This is not a property on the component. This is only for demo purposes.',
    table: {
      type: {
        summary: null,
      },
    },
    defaultValue: 'd',
    control: {
      type: 'inline-radio',
      options: ['d', 'n'],
      labels: {
        d: 'Day',
        n: 'Night',
      },
    },
  },
  description: {
    defaultValue: 'icon description',
  },
};

export default argTypes;
