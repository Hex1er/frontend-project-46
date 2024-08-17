#!/usr/bin/env node
import { Command } from 'commander';
import { parse } from '../src/index.js';
import generateDiff from '../src/generateDiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const { data1, data2 } = parse(filepath1, filepath2);
    const diff = generateDiff(data1, data2);
    console.log(diff);
  });

program.parse();
