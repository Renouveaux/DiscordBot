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
						Bonjour et bienvenue sur le chat de grafikart.fr.

						  Quelques règles sont à observer lors de vos interactions avec les autres utilisateurs.
						  Tous d'abord, personne n'est présent pour faire votre code à votre place.
						  Si vous devez partager du code, merci d'utiliser les sites comme paste.ee ou codeshare.io, idem pour les images (lut.im).
						  Il y a de tout comme développeur, et pas seulement ceux de votre langage, il va donc de soit de bien expliquer votre problème, le langage dans lequel vous coder, et partagez votre code.
						  Sans voir, il est impossible d'aider.

						  Un peu de courtoisie ne fait pas de mal. Dites merci et restez poli.

						  Des commandes de bot sont à votre disposition. En cas de trou de mémoire, tapez `!help` pour une liste des commandes disponibles.

						  Le langage **SMS** est proscrit.

						  Des channels différents ont été créé en fonction de ce que vous faites. 
						  Le channel voice doit être utilisé en complément au chat vocal, pour éviter de perdre tous le monde dans le channel général.
						  Respectez les channels Privé 1, 2 et 3. Si vous voyez des personnes dedans, et que vous n'êtes pas convié, ne vous incrustez pas.

						  Enfin, faites-vous plaisir, et partagez. Notez qu'il n'est pas interdit de parler de tout et de rien.
					*/}, { prefix: Config.commandPrefix })
				});

			}).catch(function (err) {
  				console.log(err);
			});

		});

	}

}

var multiline = require('multiline.js');