expect = require("chai").expect
CodeFilter = require('../lib/filters/code')

describe 'filters/code', ->

    describe '#isCode()', ->

        it 'should let standart text pass', ->
            expect(CodeFilter.isCode('Salut les gens' )).to.be.falsy

        it 'should let code pass on one line', ->
            expect(CodeFilter.isCode('vérifie les {} je pense que ça vient de là et j\'ai une <div> qui bloque !')).to.be.falsy

        it 'should not catch pings', ->
            expect(CodeFilter.isCode('Woops trop de code <@89677831675604992> ! http://pastie.org/private/co2hxfz4o905tz6nyygqmg')).to.be.falsy

        it 'should not catch multiple replies', ->
            expect(CodeFilter.isCode('Woo <@aaaa> <@bbbb> <@ccc> <@ddd> ')).to.be.falsy
            expect(CodeFilter.isCode("Woo <@aaaa> <@bbbb>\n<@ccc>\n<@ddd>")).to.be.falsy

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
    <div class="content-wrap">


        <a href="javascript:;" class="mobile-menu-button visible-mobile" id="open-button">
            <span></span>
        </a>

        <div class="top visible-mobile">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide ph" data-source="ph">
                        <h1>
                            Product Hunt
                        </h1>
                    </div>
                    <div class="swiper-slide dn" data-source="dn">
                        <h1>
                            Designer News
                        </h1>
                    </div>
                    <div class="swiper-slide hn" data-source="hn">
                        <h1>
                            Hacker News
                        </h1>
                    </div>
                </div>
            </div>""")
            ).to.be.ok