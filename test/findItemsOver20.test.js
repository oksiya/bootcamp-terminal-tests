import { findItemsOver20 } from '../findItemsOver20.js';
import { strict as assert } from 'assert';

describe('findItemsOver20 function', () => {
  it('should return items with quantity over 20', () => {
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
    assert.deepEqual(findItemsOver20(items), expected);
  });
});
