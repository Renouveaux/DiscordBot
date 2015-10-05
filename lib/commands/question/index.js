module.exports = function(data, Bot, Config, Helpers) {

	var user = Helpers.getCommandPart(data.message, '2', Config);

	if(typeof user !== 'undefined' && user.match(/<@[0-9]+>/gi).length == '1'){
		Bot.sendMessage({
			'to': user.replace("<@", "").replace(">", ""),
    		'message': multiline.stripIndent(function() {/*
     		  Pour que chacun puisse vous aider de la meilleur façon que ce soit, il convient de poser directement votre problématique.
			    Avec les informations suivante pour une aide des plus rapides :
			        1. Le langage dans lequel vous parlez.
			        2. Les résultats que vous attendez de votre fonction ou programme
			        3. Les erreurs qu'il vous retourne
			        4. Personne n'est voyant, postez votre code bloquant sur un site code codeshare.io ou pastie.org
			        5. Pas la peine de supplier, si personne ne répond, c'est que personne n'à la réponse.
			    En suivant ces quelques lignes, vous trouverez généralement plus de personnes vous aidant qu'un simple, ***j'ai un problème, ca ne marche pas***.
    		*/})
    	}, function(res){
    		console.log(res);
    	});

	}else{
		Bot.sendMessage({
			'to': data.userID,
			'message': "Merci de spécifier un utilisateur"
		});
	}

};

var multiline = require('multiline');