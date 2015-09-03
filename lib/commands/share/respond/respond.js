module.exports = function(data, Bot, Config, Helpers) {

	var request = require('request');

	//
	// Get the key
	//

	var message;

	var key = Helpers.getCommandPart(data.message, '2', Config);

	request('http://codeshare.io/new', function (error, response, body) {
		if (!error && response.statusCode == 200) {

			if(typeof key !== 'undefined' && key.match(/<@[0-9]+>/gi).length == '1'){
				message = key + " -> " + response.request.href;
			}else{
				message = response.request.href;
			}

			Bot.sendMessage({
				'to': data.channelID,
				'message': message
			});
			
		}else{

			if(typeof key !== 'undefined' && key.match(/<@[0-9]+>/gi).length == '1'){
				message = key + " -> " + "http://pastie.org/";
			}else{
				message = "http://pastie.org/";
			}

			Bot.sendMessage({
				'to': data.channelID,
				'message': message
			});


		}
	});

}