import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const getFormat = (diff, formatterName = 'stylish') => {
  switch (formatterName) {
    case 'stylish':
      return formatStylish(diff);
    case 'plain':
      return formatPlain(diff);
  }
};

export default getFormat;