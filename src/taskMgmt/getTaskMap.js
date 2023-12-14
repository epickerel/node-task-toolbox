import { promises as fs } from 'fs';

export const getTaskMap = async () => {
  const files = await fs.readdir('src/tasks');
  // NOTE: restrict to .js files for now
  return files
    .filter((file) => file.endsWith('.js') && !file.endsWith('.test.js'))
    .map((file) => file.substring(0, file.length - '.js'.length));
};
