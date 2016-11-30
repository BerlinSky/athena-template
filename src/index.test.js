import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Static, hard-coded, test', () => {
  it('should pass', () => {
    // expect((true)).to.equal(false);
    expect((true)).to.equal(true);
  });
});

describe('JSDom test', () => {
  it('should also pass', (done) => {
    const indexPage = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(indexPage, function(err, window) {
      const targetElem = window.document.getElementById('targetSpan');
      expect(targetElem.innerHTML).to.equal("This is the landing page.");
      done();
      window.close();
    });
  });
});