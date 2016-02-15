module.exports = function(data, Bot, Config, Helpers) {

	var request = require('request');
	var message;

	var param = Helpers.getCommandPart(data.message, '2', Config);

	request('http://codeshare.io/new', function (error, response, body) {
		if (!error && response.statusCode == 200) {

			if(typeof param !== 'undefined' && param.match(/<@[0-9]+>/gi).length == '1'){
				message = param + " -> " + response.request.href;
			}else{
				message = response.request.href;
			}

			/*Bot.editUserInfo({
				password: Config.password,
				username: data.user
			}, function(response) { */
				Bot.sendMessage({
					'to': data.channelID,
					'message': message
				});
				/*Bot.editUserInfo({
					password: Config.password,
					username: Config.commandPrefix + "" + Config.botName
				});
			});*/

		}else{

			if(typeof param !== 'undefined' && param.match(/<@[0-9]+>/gi).length == '1'){
				message = param + " -> " + "http://pastie.org/";
			}else{
				message = "http://pastie.org/";
			}

			/*Bot.editUserInfo({
				password: Config.password,
				username: data.user
			}, function(response) { */
				Bot.sendMessage({
					'to': data.channelID,
					'message': message
				});
				/*Bot.editUserInfo({
					password: Config.password,
					username: Config.commandPrefix + "" + Config.botName
				});
			});*/

		}
	});

}