/**
 * regroupe les différentes function faisant appel à la bdd
 * @param data
 * @param Bot
 * @param Config
 * @param Helpers
 */


module.exports = function(data, Bot, Config, Helpers) {

	var db = new PouchDB('ratonBot/user');
    require('./introUser').init(data, Bot, Config, Helpers, db);

}

var PouchDB = require('pouchdb');