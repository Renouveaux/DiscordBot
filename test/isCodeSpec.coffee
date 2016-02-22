expect = require("chai").expect
CodeFilter = require('../lib/filters/code')

describe 'filters/code', ->

    describe '#isCode()', ->

        it 'should let standart text pass', ->
            CodeFilter.isCode('Salut les gens', (format) -> 
                expect(format).to.be.falsy
            )

        it 'should let code pass on one line', ->
            CodeFilter.isCode('vérifie les {} je pense que ça vient de là et j\'ai une <div> qui bloque !', (format) ->
                expect(format).to.be.falsy
            )

        it 'should not catch pings', ->
            CodeFilter.isCode('Woops trop de code <@89677831675604992> ! http://pastie.org/private/co2hxfz4o905tz6nyygqmg', (format) ->
                expect(format).to.be.falsy
            )

        it 'should not catch multiple replies', ->
            CodeFilter.isCode('Woo <@aaaa> <@bbbb> <@ccc> <@ddd> ', (format) ->
                expect(format).to.be.falsy
            )
            CodeFilter.isCode("Woo <@aaaa> <@bbbb>\n<@ccc>\n<@ddd>", (format) -> 
                expect(format).to.be.falsy
            )

        it 'should detect code based on }', ->
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
            """, (format) -> 
                expect(format).to.be.ok
            )

        it 'should detect JSON', ->

            CodeFilter.isCode("""contentDetails": {
                "relatedPlaylists": {
                 "likes": "LL16BeXfcf_aMbSBOoticKsQ",
                 "favorites": "FL16BeXfcf_aMbSBOoticKsQ",
                 "uploads": "UU16BeXfcf_aMbSBOoticKsQ"
                },""", (format) -> 
                expect(format).to.be.ok
            )



        it 'should detect HTML', ->
            CodeFilter.isCode("""
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
                    </div>""", (format) ->
                        expect(format).to.be.ok
            )

             