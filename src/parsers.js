import path from 'path';
import yaml from 'js-yaml';

const parse = (filepath, fileContent) => {
  const ext = path.extname(filepath).slice(1);

  switch (ext) {
    case 'json':
      return JSON.parse(fileContent);

    case 'yml':
    case 'yaml':
      return yaml.load(fileContent);

    default:
      throw new Error(`Unsupported format: ${ext}`);
  }
};

export default parse;
