import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import generateDiff from './generateDiff.js';
import getFormat from './formatters/index.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const getFormatFromFilepath = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => {
  const absolutePath = getAbsolutePath(filepath);
  const fileContent = readFile(absolutePath);
  const format = getFormatFromFilepath(filepath);
  return parse(fileContent, format);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const diff = generateDiff(data1, data2);
  return getFormat(diff, formatName);
};

export default genDiff;
