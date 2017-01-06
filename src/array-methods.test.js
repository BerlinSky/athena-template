import { expect } from 'chai';
import { selectedColors } from './array-methods';

describe('Array methods, filter', () => {
  it('should pass', () => {
    // expect((true)).to.equal(false);
    const multiplier = 200;
    const newColors = selectedColors(multiplier).length;

    expect((newColors)).to.equal(2);
  });
});
