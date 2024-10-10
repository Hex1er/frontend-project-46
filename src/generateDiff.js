import _ from 'lodash';

const generateDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)); // объединяем ключи двух объектов
  const sortedKeys = _.sortBy(keys); // сортируем ключи

  const getDiffItem = (key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data1, key)) {
      return { key, value: value2, state: 'added' }; // ключ есть только во втором объекте
    }

    if (!_.has(data2, key)) {
      return { key, value: value1, state: 'removed' }; // ключ есть только в первом объекте
    }

    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, value: generateDiff(value1, value2), state: 'complex' }; // оба значения — объекты, рекурсивно сравниваем
    }

    if (!_.isEqual(value1, value2)) {
      return { key, value: { oldValue: value1, newValue: value2 }, state: 'updated' }; // значения разные
    }

    return { key, value: value1, state: 'unchanged' }; // значения одинаковые
  };

  // Используем flatMap для генерации плоского массива
  const diffItems = sortedKeys.flatMap(getDiffItem);

  return diffItems;
};

export default generateDiff;