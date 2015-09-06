/**
 * Permet de filtrer un message et répondre en fonction
 * @param data
 * @param Bot
 * @param Config
 * @param Helpers
 */
module.exports = function(data, Bot, Config, Helpers) {

    require('./code').filter(data, Bot, Config, Helpers)

}