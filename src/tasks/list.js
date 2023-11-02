import { getTaskDictionary } from '#src/taskMgmt/getTaskDictionary.js';
const task = {
  name: 'list',
  description: 'List and describe the available tasks',
};

const list = async () => {
  const taskDictionary = await getTaskDictionary();
  console.log('Available tasks:');
  taskDictionary.forEach((task) => {
    console.log(`  ${task.name}: ${task.description}`);
  });
};

export default list;

export { task };
