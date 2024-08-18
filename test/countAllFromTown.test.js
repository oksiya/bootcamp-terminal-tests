import { countAllFromTown } from '../countAllFromTown.js';
import { strict as assert } from 'assert';

describe('countAllFromTown function', () => {
  it('should return the number of registration numbers from a specified town', () => {
    assert.equal(countAllFromTown('CA 182736,CY 523519,CJ 812328', 'CA'), 1);
  });
});
