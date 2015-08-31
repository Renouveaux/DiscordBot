module.exports = function(data, Bot, Config, Helpers) {

  var key = Helpers.getCommandPart(data.message, '3', Config);

  var value = Helpers.getCommandPart(data.message, '>3', Config);

  if(Config.admin.indexOf(data.userID) == -1) {

    var message = '';

    message += '@';
    message += data.user;
    message += ' ';

    message += 'Vous n\'avez pas la permission d\'effectuer cette commande'

    Bot.sendMessage({
      'to': data.channelID,
      'message': message
    })

    return;

  }

  if(typeof Config.protectedKeys !== 'undefined'){
    if(Config.protectedKeys.indexOf(key) != -1 && key != '') {

      var message = '';

      message += '@';
      message += data.user;
      message += ' ';

      message += 'La clef est protégée.';

      Bot.sendMessage({
        'to': data.channelID,
        'message': message
      });

      return;

    }
  }

  if(!Config[key] && Config[key] != false) {

    var message = '';

    message += '@';
    message += data.user;
    message += ' ';

    message += 'Cette clef n\'existe pas.'

    Bot.sendMessage({
      'to': data.channelID,
      'message': message
    });

    return;
  }

  switch(typeof Config[key]) {

    case 'boolean':
      Config[key] = Boolean(value);
    break;

    case 'number':
      Config[key] = Number(value);
    break;

    case 'object':
      Config[key] = JSON.parse(value);
    break;

    default:
      Config[key] = value;
    break;

  }

  var message = '';

  message += '@';
  message += data.user;
  message += ' ';

  message += 'La clef "' + key + '" contient maintenant "' + value + '".';

  Bot.sendMessage({
    'to': data.channelID,
    'message': message
  });

};
