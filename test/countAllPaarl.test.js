import { countAllPaarl } from '../countAllPaarl.js';
import { strict as assert } from 'assert';

describe('countAllPaarl function', () => {
  it('should return the number of registration numbers from Paarl', () => {
    assert.equal(countAllPaarl('CJ 182736,CY 523519,CJ 812328'), 2);
  });
});
