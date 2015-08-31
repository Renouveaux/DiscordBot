module.exports = function(data, Bot, Config, Helpers) {

	//
	// Get the key
	//

	var message;

	var key = Helpers.getCommandPart(data.message, '2', Config);

	if(typeof key !== 'undefined' && key.match(/<@[0-9]+>/gi).length == '1'){
		message = key + " -> " + Config.global.share;
	}else{
		message = Config.global.share;
	}

	Bot.sendMessage({
		'to': data.channelID,
		'message': message
	});





}