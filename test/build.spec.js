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
      expect(zcReactFilePath).to.be.a.file().with.contents.that.match(/exports.default = ZingChart;/);
    });
    // verify ZC export exists
    it(`ZC export exists`, async function() {
      let zcReactFilePath = 'dist/zingchart-react.js';
      expect(zcReactFilePath).to.be.a.file().with.contents.that.match(/exports.ZC = ZC\$2;/);
    });
  });

  describe('dist/modules', function() {
    // verify the zingchart modules exist
    it(`zingchart modules folder should exist`, async function() {
      let zcModulesFilePath = 'dist/modules/';
      expect(zcModulesFilePath).to.be.a.directory();
    });

    // verify a couple of the zingchart module files exist
    it(`zingchart modules files should exist`, async function() {
      let zcModulesFilePath = 'dist/modules/';
      let zcModuleFiles = [
        'zingchart-api-rules.min.js',
        'zingchart-maps-aus.min.js',
        'zingchart-sunburst.min.js'
      ];
      expect(zcModulesFilePath).to.be.a.directory().and.include.files(zcModuleFiles);
    });
  });
});
