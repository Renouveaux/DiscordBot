module.exports = function(data, Bot, Config, Helpers) {

	var request = require('request');
	var message;

	//
	// Get the param
	//

	var param = Helpers.getCommandPart(data.message, '2', Config);

	if(typeof param !== 'undefined' && param.match(/<@[0-9]+>/gi).length == '1'){
		message = param + " -> " + Config.global.screen;
	}else{
		message = Config.global.screen;
	}

	Bot.setUsername(data.user, function(response) { 
		Bot.sendMessage({
			'to': data.channelID,
			'message': message
		});
		Bot.setUsername(Config.commandPrefix + "" + Config.botName);
	});

}