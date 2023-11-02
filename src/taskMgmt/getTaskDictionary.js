import { promises as fs } from 'fs';

export const getTaskDictionary = async () => {
  const files = await fs.readdir('src/tasks');
  const taskDictionary = await Promise.all(
    files.map(async (file) => {
      const task = await import(`#src/tasks/${file}`);
      return task.task;
    }),
  );
  return taskDictionary;
};
