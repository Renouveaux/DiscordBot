module.exports = function(data, Bot, Config) {

	var cron = require('cron').CronJob;

	new cron('* * 0,6,12,18 * * *', function(){
		Bot.sendMessage({
			'to': "85154866468487168",
    		'message': multiline.stripIndent(function() {/*
     		  **Ma moustache joue son rôle, permettant de récolter des dons pour la santé masculine.**
     		  https://fr.movember.com/
    		*/})
    	});
	}, null, true, "Europe/Paris");

}


var multiline = require('multiline');