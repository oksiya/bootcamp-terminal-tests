import { greet } from '../greet.js';
import { strict as assert } from 'assert';

describe('greet function', () => {
  it('should greet someone by name', () => {
    assert.equal(greet('Bob'), 'Hello, Bob');
  });
});
