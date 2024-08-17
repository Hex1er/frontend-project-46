import _ from 'lodash';

const generateDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));

  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  }).join('\n');

  return `{\n${diff}\n}`;
};

export default generateDiff;