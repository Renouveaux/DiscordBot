expect = require("chai").expect
CodeFilter = require('../lib/filters/code/code')

describe 'filters/code', ->

    describe '#isCode()', ->

        it 'should let standart text pass', ->
            expect(CodeFilter.isCode('Salut les gens' )).to.not.be.ok

        it 'should let code pass on one line', ->
            expect(CodeFilter.isCode('vérifie les {} je pense que ça vient de là')).to.not.be.ok

        it 'should detect code based on }', ->
            expect(
                CodeFilter.isCode("""
                    var assert = require('assert');
                    describe('CodeIntercaptor', function() {
                        describe('#intercep()', function () {
                            it('should return -1 when the value is not present', function () {
                                assert.equal(-1, [1,2,3].indexOf(5));
                                assert.equal(-1, [1,2,3].indexOf(0));
                            });
                        });
                    });
                """)
            ).to.be.ok
