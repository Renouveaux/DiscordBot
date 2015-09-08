expect = require("chai").expect
CodeFilter = require('../lib/filters/code')

describe 'filters/code', ->

    describe '#isCode()', ->

        it 'should let standart text pass', ->
            expect(CodeFilter.isCode('Salut les gens' )).to.not.be.ok

        it 'should let code pass on one line', ->
            expect(CodeFilter.isCode('vérifie les {} je pense que ça vient de là et j\'ai une <div> qui bloque !')).to.not.be.ok

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

        it 'should detect JSON', ->
            expect(
                CodeFilter.isCode("""contentDetails": {
    "relatedPlaylists": {
     "likes": "LL16BeXfcf_aMbSBOoticKsQ",
     "favorites": "FL16BeXfcf_aMbSBOoticKsQ",
     "uploads": "UU16BeXfcf_aMbSBOoticKsQ"
    },""")
            ).to.be.ok



        it 'should detect HTML', ->
            expect(
              CodeFilter.isCode("""
<div class="site-container">
      <header class="topbar" id="topbar">
        <a class="topbar-logo" href="/"><img alt="Logo Grafikart.fr" src="/assets/logo_white-6304a22034146ecc84fbf8b03347add71243ed8ea13ad1e9f1d2d0807eb5d909.png" /></a>
        <nav class="topbar-menu">""")
            ).to.be.ok
