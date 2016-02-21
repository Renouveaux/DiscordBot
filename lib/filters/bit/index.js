module.exports = {

	shorten: function(data, Bot, Config, Helpers) {

		var Bitly = require('bitly');
		var bitly = new Bitly(Config.API.bitly.key);

		bitly.shorten(data.message)
		.then(function(response) {
			var short_url = response.data.url;

			if(response.status_code == 500){

				Bot.sendMessage({
					'to': data.userID,
					'message': "Votre url ne semble pas valide."
				});	

			}else{

				bitly.linkEdit('title', short_url, data.user);

				Bot.editUserInfo({
					password: Config.password,
					username: data.user
				}, function(response) {
					Bot.sendMessage({
						'to': data.channelID,
						'message': short_url
					});
					Bot.editUserInfo({
						password: Config.password,
						username: Config.commandPrefix + "" + Config.botName
					});
				});

				Bot.deleteMessage({
					channel: data.channelID,
					messageID: data.rawEvent.d.id
				});
				
			}


		}, function(error) {
			throw error;
		});


	}


}