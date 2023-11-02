const task = {
  name: '__TASK_NAME__',
  description: '__TASK_DESCRIPTION__',
};

const __TASK_NAME__ = async (context) => {
  console.log(`Executing ${task.name} task`);
  console.log(context.env?.yourEnvVar);
};

export default __TASK_NAME__;

export { task };
