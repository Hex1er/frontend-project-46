import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('JSON stylish', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');

  const expected = readFile('expected_stylish.txt');

  const actual = genDiff(file1Path, file2Path, 'stylish');

  expect(actual).toBe(expected);
});

test('JSON plain', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');

  const expected = readFile('expected_plain.txt');

  const actual = genDiff(file1Path, file2Path, 'plain');

  expect(actual).toBe(expected);
});

test('YAML stylish', () => {
  const file1Path = getFixturePath('file1.yml');
  const file2Path = getFixturePath('file2.yml');

  const expected = readFile('expected_stylish.txt');

  const actual = genDiff(file1Path, file2Path, 'stylish');

  expect(actual).toBe(expected);
});

test('YAML plain', () => {
  const file1Path = getFixturePath('file1.yml');
  const file2Path = getFixturePath('file2.yml');

  const expected = readFile('expected_plain.txt');

  const actual = genDiff(file1Path, file2Path, 'plain');

  expect(actual).toBe(expected);
});
