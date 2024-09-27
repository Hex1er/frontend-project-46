import path from 'path';
import yaml from 'js-yaml';

const parse = (filepath, fileContent) => {
  const ext = path.extname(filepath);

  switch (ext) {
    case '.json':
      return JSON.parse(fileContent);

    case '.yml':
    case '.yaml':
      return yaml.load(fileContent);

    default:
      throw new Error(`format not found`);
  }
};

export default parse;