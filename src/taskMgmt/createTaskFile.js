import { promises as fs } from 'fs';

export const createTaskFile = async (taskName, taskDescription) => {
  let template = await fs.readFile('src/templates/basicTaskTemplate.js', 'utf8');
  template = template.replace(/__TASK_NAME__/g, taskName);
  template = template.replace(/__TASK_DESCRIPTION__/g, taskDescription);
  return template;
};
