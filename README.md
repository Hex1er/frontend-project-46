### Hexlet tests and linter status:

[![Actions Status](https://github.com/Hex1er/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Hex1er/frontend-project-46/actions)
[![CI](https://github.com/Hex1er/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/Hex1er/frontend-project-46/actions/workflows/ci.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/489a07aba3fd932e30f3/maintainability)](https://codeclimate.com/github/Hex1er/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/489a07aba3fd932e30f3/test_coverage)](https://codeclimate.com/github/Hex1er/frontend-project-46/test_coverage)

# Difference Calculator

This project is a program that determines the difference between two data structures. It's useful for detecting configuration changes, comparing file versions, and other similar tasks.

Utility features:

- Support for different input formats: yaml and json
- Report generation in plain text, stylish and json formats

## Installation and startup:

- To install the program, clone the repository and run the following command in the terminal: `make install`.
- To compare two files, run the `gendiff` command followed by the paths to the two files.
- The --format option allows you to select the format of the report.

## Usage examples:

### Json Files Comparison

[![asciicast](https://asciinema.org/a/680680.svg)](https://asciinema.org/a/680680)

### Yaml Files Comparison

[![asciicast](https://asciinema.org/a/680677.svg)](https://asciinema.org/a/680677)
