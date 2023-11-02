import { getTaskMap } from '#src/taskMgmt/getTaskMap.js';
import { getTaskContext } from '#src/taskMgmt/getTaskContext.js';

const main = async (taskName) => {
  const taskMap = await getTaskMap();
  const taskContext = await getTaskContext();

  if (taskName) {
    if (taskMap.includes(taskName)) {
      const args = [taskContext, ...process.argv.slice(3)];
      const task = await import(`./tasks/${taskName}.js`);
      task.default.apply(undefined, args);
    } else {
      console.log(`No task found: ${taskName}`);
    }
  } else {
    console.log('Specify a task to run');
  }
};

main.apply(undefined, process.argv.slice(2));
