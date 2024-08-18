import { fromWhere } from '../fromWhere.js';
import { strict as assert } from 'assert';

describe('fromWhere function', () => {
  it('should return Bellville for CY registration numbers', () => {
    assert.equal(fromWhere('CY 123'), 'Bellville');
  });

  it('should return Paarl for CJ registration numbers', () => {
    assert.equal(fromWhere('CJ 123'), 'Paarl');
  });

  it('should return Cape Town for CA registration numbers', () => {
    assert.equal(fromWhere('CA 123'), 'Cape Town');
  });

  it('should return "Some other place!" for other registration numbers', () => {
    assert.equal(fromWhere('CC 123'), 'Some other place!');
  });
});

