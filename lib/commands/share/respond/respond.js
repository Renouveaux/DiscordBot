module.exports = function(data, Bot, Config, Helpers) {

	var request = require('request');
	var message;

	//
	// Get the param
	//

	var param = Helpers.getCommandPart(data.message, '2', Config);
	var param2 = Helpers.getCommandPart(data.message, '3', Config);

	if(typeof param !== 'undefined' && param.match(/<@[0-9]+>/gi).length == '1'){

		



	}



	request('http://codeshare.io/new', function (error, response, body) {
		if (!error && response.statusCode == 200) {

			if(typeof param !== 'undefined' && param.match(/<@[0-9]+>/gi).length == '1'){
				message = param + " -> " + response.request.href;
			}else{
				message = response.request.href;
			}

			Bot.sendMessage({
				'to': data.channelID,
				'message': message
			});
			
		}else{

			if(typeof param !== 'undefined' && param.match(/<@[0-9]+>/gi).length == '1'){
				message = param + " -> " + "http://pastie.org/";
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