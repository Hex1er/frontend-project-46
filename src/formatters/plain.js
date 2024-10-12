import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const formatPlain = (diff, path = []) => {
  const items = diff.filter(({ state }) => state !== 'unchanged');

  const newItems = items.map(({ key, value, state }) => {
    const newPath = path.concat(key);
    const node = newPath.join('.');
    switch (state) {
      case 'added': {
        const val = formatValue(value);
        return `Property '${node}' was added with value: ${val}`;
      }
      case 'removed':
        return `Property '${node}' was removed`;
      case 'updated': {
        const { oldValue, newValue } = value;
        const oldVal = formatValue(oldValue);
        const newVal = formatValue(newValue);
        return `Property '${node}' was updated. From ${oldVal} to ${newVal}`;
      }
      default:
        return formatPlain(value, newPath);
    }
  });
  return newItems.join('\n');
};

export default formatPlain;