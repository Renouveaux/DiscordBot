/**
 * Permet de filtrer un message et répondre en fonction
 * @param data
 * @param Bot
 * @param Config
 * @param Helpers
 */
 module.exports = function(data, Bot, Config, Helpers) {

 	if(data.message.match(/[\r\n]/gm)){ 
 		require('./code').filter(data, Bot, Config, Helpers);
 	}

	if(Config.admin.indexOf(data.userID) == -1) {
	 	if(data.message.match(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gm)){
	 		require('./bit').shorten(data, Bot, Config, Helpers);		
	 	}
	}

 }