#!/usr/bin/env node
import { Command } from 'commander';
import { parse } from '../src/index.js';

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
    console.log('File 1 Data:', data1);
    console.log('File 2 Data:', data2);
  });

program.parse();
