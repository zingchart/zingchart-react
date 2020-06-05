const utils = require('./utils.js');
const chai = require('chai');
chai.use(require('chai-fs'));

// server/controllers/api/card.js
describe('Build', function() {

  describe('dist/zingchart-react.js', function() {
    // verify the ZingChart object exists
    it(`zingchart-react.js file should exist`, async function() {
      let zcReactFilePath = 'dist/zingchart-react.js';
      expect(zcReactFilePath).to.be.a.path();
    });
    // verify exports
    it(`default export exists`, async function() {
      // exports.ZC = ZC$2;
      let zcReactFilePath = 'dist/zingchart-react.js';
      expect(zcReactFilePath).to.be.a.file().with.contents.that.match(/module.exports = ZingChart;/);
    });
  });

});
