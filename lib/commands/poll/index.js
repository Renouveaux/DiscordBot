module.exports = function(data, Bot, Config, Helpers) {

  var param = Helpers.getCommandPart(data.message, '2', Config);

  if(Config.admin.indexOf(data.userID) == -1) {

    var message = '';

    message += '@';
    message += data.user;
    message += ' ';

    message += 'Vous n\'avez pas la permission d\'effectuer cette commande'

    Bot.sendMessage({
      'to': data.userID,
      'message': message
    })

    return;

  }

  switch(param) {

    default:
    help(data, Bot, Config, Helpers);
    break;
  }

};

var help = require('./help');