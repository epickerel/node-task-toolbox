import { jest, describe, it, beforeAll, beforeEach, expect } from '@jest/globals';

let getTaskDictionary;
let getTaskMap;
const taskName = 'taskOne';
const taskDescription = 'task one description';

jest.unstable_mockModule('./getTaskMap', () => ({
  getTaskMap: jest.fn(),
}));
jest.unstable_mockModule('#src/tasks/createTask', () => ({
  default: jest.fn(),
  task: {
    name: taskName,
    description: taskDescription,
  },
}));

describe('getTaskMap', () => {
  beforeAll(async () => {
    ({ getTaskDictionary } = await import('./getTaskDictionary'));
    ({ getTaskMap } = await import('./getTaskMap'));
  });
  beforeEach(() => {
    jest.resetAllMocks();
    getTaskMap.mockResolvedValue(['createTask']);
  });

  it('should collect the list of class names and descriptions', async () => {
    const result = await getTaskDictionary();
    expect(result).toEqual([{ name: taskName, description: taskDescription }]);
  });
});
