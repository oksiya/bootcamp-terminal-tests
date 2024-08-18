import { mostProfitableDepartment } from '../mostProfitableDepartment.js';
import { strict as assert } from 'assert';

describe('mostProfitableDepartment function', () => {
  it('should return the department with the highest sales', () => {
    const salesData = [
      { department: 'hardware', sales: 4500 },
      { department: 'outdoor', sales: 1500 },
      { department: 'carpentry', sales: 5500 },
      { department: 'hardware', sales: 7500 },
      { department: 'outdoor', sales: 2500 },
      { department: 'carpentry', sales: 7500 },
    ];
    assert.equal(mostProfitableDepartment(salesData), 'carpentry');
  });
});
