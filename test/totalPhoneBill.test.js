import { totalPhoneBill } from '../totalPhoneBill.js';
import { strict as assert } from 'assert';

describe('totalPhoneBill function', () => {
  it('should calculate the total phone bill for calls and sms', () => {
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
  });
});
