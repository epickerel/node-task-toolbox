import { jest, describe, it, beforeAll, beforeEach, expect } from '@jest/globals';

let createTaskFile;

jest.unstable_mockModule('fs', () => ({
  promises: {
    readFile: jest.fn(),
  },
}));

let fs;
let taskName;
let taskDescription;

describe('createTaskFile', () => {
  beforeAll(async () => {
    ({ createTaskFile } = await import('./createTaskFile'));
    ({ promises: fs } = await import('fs'));
  });
  beforeEach(() => {
    jest.resetAllMocks();
    taskName = 'testTaskName';
    taskDescription = 'testTaskDescription';
    fs.readFile.mockResolvedValue('__TASK_NAME__,__TASK_DESCRIPTION__,__TASK_NAME__');
  });

  it('should populate the name and description in the template', async () => {
    const result = await createTaskFile(taskName, taskDescription);
    expect(result).toEqual([taskName, taskDescription, taskName].join());
  });
});
