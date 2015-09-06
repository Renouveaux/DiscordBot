var expect = require("chai").expect
    , CodeFilter = require('../lib/filters/code/code');

describe('filters/code', function() {

    describe('#isCode()', function () {
        it('should let standart text pass', function () {
            expect( CodeFilter.isCode('Salut les gens' ) ).to.not.be.ok;
        });
        it('should let code pass on one line', function () {
            expect( CodeFilter.isCode('vérifie les {} je pense que ça vient de là') ).to.not.be.ok;
        });
        it('should detect code based on }', function () {
            expect(
                CodeFilter.isCode('var assert = require("assert");\ndescribe(\'CodeIntercaptor\', function() {\n    describe(\'#intercep()\', function () {\n        it(\'should return -1 when the value is not present\', function () {\n            assert.equal(-1, [1,2,3].indexOf(5));\n            assert.equal(-1, [1,2,3].indexOf(0));\n        });\n    });\n});')
            ).to.be.ok;
        });
    });
});