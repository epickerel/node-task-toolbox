import { promises as fs } from 'fs';
import { getTaskMap } from '#src/taskMgmt/getTaskMap.js';
import { createTaskFile } from '#src/taskMgmt/createTaskFile.js';

const task = {
  name: 'createTask',
  description: 'Creates a new task',
};

const createTask = async (_context, taskName, taskDescription = '') => {
  let taskMap = await getTaskMap();
  if (taskMap.includes(taskName)) {
    console.log(`Task already exists: ${taskName}`);
  } else {
    const taskFileContents = await createTaskFile(taskName, taskDescription);
    await fs.writeFile(`src/tasks/${taskName}.js`, taskFileContents, 'utf8');
    console.log(`Task created: ${taskName}`);
  }
};

export default createTask;

export { task };
