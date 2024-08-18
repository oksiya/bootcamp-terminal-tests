import { isFromBellville } from '../isFromBellville.js';
import { strict as assert } from 'assert';

describe('isFromBellville function', () => {
  it('should return true for Bellville reg numbers', () => {
    assert.equal(isFromBellville('CY 123'), true);
  });

  it('should return false for non-Bellville reg numbers', () => {
    assert.equal(isFromBellville('CA 123'), false);
  });
});
