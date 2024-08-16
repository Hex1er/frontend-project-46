import fs from 'fs';
import path from 'path';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const parseJson = (fileContent) => JSON.parse(fileContent);

export const parse = (file1, file2) => {
  const path1 = getAbsolutePath(file1);
  const path2 = getAbsolutePath(file2);
  const fileContent1 = readFile(path1);
  const fileContent2 = readFile(path2);
  const data1 = parseJson(fileContent1);
  const data2 = parseJson(fileContent2);
  return { data1, data2 };
};