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

						Quelques règles sont à observées lors de vos interractions avec les autres utilisateurs.
						Tous d'abords, personne n'est présent pour faire votre code à votre place.
						Si vous devez partager du code, merci d'utiliser les site come Pastebin ou Codeshare, idem pour les images.
						Ils y'a de tous comme developpeur, et pas seulement ceux de votre langage, il va donc de soit de bien expliquer votre problème, 
						le langage dans lequel vous coder, et partager votre code. Sans voir, il est impossible d'aider.

						Pas de message privé en direct pour une demande d'aide, tous le monde est là pour aider tous le monde, et si vous avez un problème
						à un endroit de code spécifique, alors vous n'êtes peu-être pas seul. Votre problème peux aider d'autre avec leur problème.

						Un peu de courtoisie ne fait pas de mal. Dites merci et restez polie.						

						Des commandes de bot sont à votre disposition en cas de trou de mémoire, taper !help pour une liste des commandes disponible.

						Le langage **SMS** est proscrit.

						Des channels différents sont créer en fonction de ce que vous faite. 
						Le channel voice doit être utilisé en cas de voix pour éviter de perdre tous le monde dans le général.
						Respectez les channels Privé, 1, 2 et 3, si vous voyez des personnes dedans, et que vous n'êtes pas convié, ne vous incrustez pas.

						Enfin, faites-vous plaisir, et partagez. Il n'est toutefois pas interdit de parler de tous et de rien.
					*/}, { prefix: Config.commandPrefix })
				});

			}).catch(function (err) {
  				console.log(err);
			});

		});

	}

}

var multiline = require('multiline.js');