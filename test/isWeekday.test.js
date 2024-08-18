import { isWeekday } from '../isWeekday.js';
import { strict as assert } from 'assert';

describe('isWeekday function', () => {
  it('should return true for weekdays', () => {
    assert.equal(isWeekday('Monday'), true);
  });

  it('should return false for weekends', () => {
    assert.equal(isWeekday('Saturday'), false);
  });
});
