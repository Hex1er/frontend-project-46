import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = ['stylish', 'plain', 'json'];

test.each(formats)('compare JSON files', (format) => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');

  const expected = readFile(`expected_${format}.txt`);
  const actual = genDiff(file1Path, file2Path, format);

  expect(actual).toBe(expected);
});

test.each(formats)('compare YAML files', (format) => {
  const file1Path = getFixturePath('file1.yml');
  const file2Path = getFixturePath('file2.yml');

  const expected = readFile(`expected_${format}.txt`);
  const actual = genDiff(file1Path, file2Path, format);

  expect(actual).toBe(expected);
});
