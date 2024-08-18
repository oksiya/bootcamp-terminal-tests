import { countRegNumber } from '../countRegNumber.js';
import { strict as assert } from 'assert';

describe('countRegNumber function', () => {
  it('should return the number of registration numbers in the string', () => {
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
  });
});
