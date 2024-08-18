import { findItemsOver } from '../findItemsOver.js';
import { strict as assert } from 'assert';

describe('findItemsOver function', () => {
  it('should return items with quantity over the specified threshold', () => {
    const items = [
      { name: 'apples', qty: 10 },
      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 },
      { name: 'apples', qty: 3 },
    ];
    const expected = [
      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 },
    ];
    assert.deepEqual(findItemsOver(items, 20), expected);
  });
});
