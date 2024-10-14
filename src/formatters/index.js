import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const getFormat = (diff, formatterName = 'stylish') => {
  switch (formatterName) {
    case 'stylish':
      return formatStylish(diff);
    case 'plain':
      return formatPlain(diff);
    case 'json':
      return formatJson(diff);
    default:
      throw new Error(`Unsupported formatter: ${formatterName}`);
  }
};

export default getFormat;
