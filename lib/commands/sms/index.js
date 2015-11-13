 module.exports = function(data, Bot, Config, Helpers) {

	var user = Helpers.getCommandPart(data.message, '2', Config);

	if(typeof user !== 'undefined' && user.match(/<@[0-9]+>/gi).length == '1'){
		Bot.sendMessage({
			'to': data.channelID,
    		'message': message = user + " -> " + "*Hey vous ne payez pas au mot, alors pas besoin d'écrire en abrégé ^^*"
    	});
	}else{
		Bot.sendMessage({
			'to': data.channelID,
			'message': "*Hey vous ne payez pas au mot, alors pas besoin d'écrire en abrégé ^^*"
		});
	}

};

var multiline = require('multiline');