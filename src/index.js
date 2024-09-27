import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import generateDiff from './generateDiff.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const readAndParseFile = (filepath) => {
  const absolutePath = getAbsolutePath(filepath);
  const fileContent = readFile(absolutePath);
  return parse(filepath, fileContent);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = readAndParseFile(filepath1);
  const data2 = readAndParseFile(filepath2);
  const diff = generateDiff(data1, data2);
  return diff;
};

export default genDiff;