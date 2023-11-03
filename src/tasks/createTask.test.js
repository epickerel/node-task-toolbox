import { jest, describe, it, beforeAll, beforeEach, expect } from '@jest/globals';

let createTask;
const mockGetTaskMap = jest.fn();
const mockCreateTaskFile = jest.fn();
jest.unstable_mockModule('../taskMgmt/getTaskMap', () => ({
  getTaskMap: mockGetTaskMap,
}));
jest.unstable_mockModule('../taskMgmt/createTaskFile', () => ({
  createTaskFile: mockCreateTaskFile,
}));
jest.unstable_mockModule('fs', () => ({
  promises: {
    writeFile: jest.fn(),
  },
}));

let createTaskFile;
let getTaskMap;
let fs;

describe('createTask', () => {
  beforeAll(async () => {
    ({ default: createTask } = await import('./createTask'));
    ({ createTaskFile } = await import('../taskMgmt/createTaskFile'));
    ({ getTaskMap } = await import('../taskMgmt/getTaskMap'));
    ({ promises: fs } = await import('fs'));
  });
  beforeEach(() => {
    jest.resetAllMocks();
    getTaskMap.mockResolvedValue(['someTask']);
    mockCreateTaskFile.mockResolvedValue('testFileContents');
  });

  it('should create a new task', async () => {
    const taskName = 'anotherTask';
    const taskDescription = 'testDescription';
    await createTask({}, taskName, taskDescription);
    expect(createTaskFile).toHaveBeenCalled();
    expect(fs.writeFile).toHaveBeenCalled();
  });

  it('should not create a task if the name already exists', async () => {
    const taskName = 'someTask';
    const taskDescription = 'testDescription';
    await createTask({}, taskName, taskDescription);
    expect(createTaskFile).not.toHaveBeenCalled();
    expect(fs.writeFile).not.toHaveBeenCalled();
  });
});
