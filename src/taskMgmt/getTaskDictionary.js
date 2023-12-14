import { getTaskMap } from './getTaskMap.js';

export const getTaskDictionary = async () => {
  const files = await getTaskMap();
  const taskDictionary = await Promise.all(
    files.map(async (file) => {
      const task = await import(`#src/tasks/${file}.js`);
      return task.task;
    }),
  );
  return taskDictionary;
};
