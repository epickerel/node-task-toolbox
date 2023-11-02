import constants from './constants.js';
/**
 * This is the task context object that is passed to all tasks. It's
 * intended to provide the system env, as well as additional
 * functionality that may be useful to tasks.
 */

export const getTaskContext = async () => {
  const context = {
    constants,
  };
  return context;
};
