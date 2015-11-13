module.exports = {
	
	init: function(data, Bot, Config, Helpers, db){

		// Check in user database if user exist
		db.get(data.userID).then(function (doc) {
		  // handle doc
		}).catch(function (err) {
			
			db.put({
  				_id: data.userID,
  				pseudo: data.user
			}).then(function (response) {
  				
				Bot.sendMessage({
				    'to': data.userID,
				    'message': multiline(function(){/*
						Bonjour et bienvenue sur le chat de Grafikart.fr.
					*/}, { prefix: Config.commandPrefix })
				});

			}).catch(function (err) {
  				console.log(err);
			});

		});

	}

}

var multiline = require('multiline.js');