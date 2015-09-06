module.exports = function(data, Bot, Config, Helpers) {

	var ping = 'Vous m\'avez sonné ?';

	Bot.sendMessage({
		'to': data.userID,
		'message': ping
	});

};
