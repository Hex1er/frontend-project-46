import formatStylish from './stylish.js';

const format = (diff, formatterName = 'stylish') => {
  switch (formatterName) {
    case 'stylish':
      return formatStylish(diff);
    // будут другие форматеры 
    // case 'json':
    //   return formatJson(diff);
    default:
      throw new Error('format not found');
  }
};

export default format;