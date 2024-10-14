import _ from 'lodash';

const generateDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const getDiffItem = (key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data1, key)) {
      return { key, value: value2, state: 'added' };
    }

    if (!_.has(data2, key)) {
      return { key, value: value1, state: 'removed' };
    }

    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, children: generateDiff(value1, value2), state: 'complex' };
    }

    if (!_.isEqual(value1, value2)) {
      return { key, value: { oldValue: value1, newValue: value2 }, state: 'updated' };
    }

    return { key, value: value1, state: 'unchanged' };
  };

  const diffItems = sortedKeys.flatMap(getDiffItem);

  return diffItems;
};

export default generateDiff;