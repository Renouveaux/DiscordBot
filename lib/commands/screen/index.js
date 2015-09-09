module.exports = function(data, Bot, Config, Helpers) {

	switch(Helpers.getCommandPart(data.message, '2', Config)) {

		case 'help':
			help(data, Bot, Config);
		break;

		default:
			respond(data, Bot, Config, Helpers);
		break;

	}

};

var help = require('./help');

var respond = require('./respond/respond.js');