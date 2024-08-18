import { transportFee } from '../transportFee.js';
import { strict as assert } from 'assert';

describe('transportFee function', () => {
  it('should return R20 for morning shift', () => {
    assert.equal(transportFee('morning'), 'R20');
  });

  it('should return R10 for afternoon shift', () => {
    assert.equal(transportFee('afternoon'), 'R10');
  });

  it('should return free for night shift', () => {
    assert.equal(transportFee('night'), 'free');
  });
});
