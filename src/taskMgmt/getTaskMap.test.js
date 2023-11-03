import { jest, describe, it, beforeAll, beforeEach, expect } from '@jest/globals';

let getTaskMap;
let dirfiles;

jest.unstable_mockModule('fs', () => ({
  promises: {
    readdir: jest.fn(),
  },
}));

let fs;

describe('getTaskMap', () => {
  beforeAll(async () => {
    ({ getTaskMap } = await import('./getTaskMap'));
    ({ promises: fs } = await import('fs'));
  });
  beforeEach(() => {
    jest.resetAllMocks();
    dirfiles = ['someTask.js', 'anotherTask.js', 'asubdir', 'someotherfile.txt'];
    fs.readdir.mockResolvedValue(dirfiles);
  });

  it('should only return .js files', async () => {
    const result = await getTaskMap();
    expect(result.length).toBe(2);
  });
});
