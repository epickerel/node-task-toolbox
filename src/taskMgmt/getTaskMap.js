import { promises as fs } from 'fs';

export const getTaskMap = async () => {
  const files = await fs.readdir('src/tasks');
  return files.map((file) => file.substring(0, file.length - '.js'.length));
};
