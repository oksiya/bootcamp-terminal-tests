import { yearsAgo } from '../yearsAgo.js';
import { strict as assert } from 'assert';

describe('yearsAgo function', () => {
  it('should return the number of years ago from the current year', () => {
    assert.equal(yearsAgo(2000), new Date().getFullYear() - 2000);
  });
});
