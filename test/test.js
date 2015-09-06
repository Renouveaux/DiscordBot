require("should");

describe('CodeFilter', function() {
    CodeFilter = require('../lib/filters/code')
    describe('#isCode()', function () {
        it('should let not code pass', function () {
            CodeFilter.isCode('Salut les gens' ).should.not.be.ok()
        });
        it('should let code pass on one line', function () {
            CodeFilter.isCode('vérifie les {}').should.not.be.ok()
        });
        it('should detect code based on {}', function () {
            CodeFilter.isCode('var assert = require("assert");\ndescribe(\'CodeIntercaptor\', function() {\n    describe(\'#intercep()\', function () {\n        it(\'should return -1 when the value is not present\', function () {\n            assert.equal(-1, [1,2,3].indexOf(5));\n            assert.equal(-1, [1,2,3].indexOf(0));\n        });\n    });\n});')
                .should.be.ok()
        });
    });
});