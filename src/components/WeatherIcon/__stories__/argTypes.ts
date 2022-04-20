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
    defaultValue: 'd',
    control: {
      type: 'radio',
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
