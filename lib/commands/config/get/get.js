module.exports = function(data, Bot, Config, Helpers) {

  //
  // Get the key
  //

  var key = Helpers.getCommandPart(data.message, '3', Config);

  //
  // Verify user is authorized
  //


  if(Config.admin.indexOf(data.userID) == -1) {

    //
    // Generate the message
    //

    var message = '';

    message += '@';
    message += data.user;
    message += ' ';

    message += 'Vous n\'avez pas la permission d\'effectuer cette commande'

    //
    // Send the error message to the sender of the command
    //

    Bot.sendMessage({
      'to': data.channelID,
      'message': message
    })

    return;

  }

  //
  // Verify key isn't protected
  //
  if(typeof Config.protectedKeys !== 'undefined'){
    if(Config.protectedKeys.indexOf(key) != -1 && key != '') {

      //
      // Generate the message
      //

      var message = '';

      message += '@';
      message += data.user;
      message += ' ';

      message += 'La clef est protégée.';

      //
      // Send the error message to the sender of the command
      //

      Bot.sendMessage({
        'to': data.channelID,
        'message': message
      });

      return;

    }
  }
  //
  // Verify key exist in config
  //

  if(!Config[key] && Config[key] != false) {

    //
    // Generate the message
    //

    var message = '';

    message += '@';
    message += data.user;
    message += ' ';

    message += 'Cette clef n\'existe pas.'

    //
    // Send the error message to the sender of the command
    //

    Bot.sendMessage({
      'to': data.channelID,
      'message': message
    });

    return;
  }

  //
  // Generate a message
  //

  var message = '';

  message += '@';
  message += data.user;
  message += ' ';

  message += 'La clef "' + key + '" vaut maintenant ';

  switch(typeof Config[key]) {

    case 'array':
      message += '[' + String(Config[key]) + ']';
      break;

    case 'object':
      message += JSON.stringify(Config[key]);
      break;

    default:
      message += Config[key];
      break;

  }

  //
  // Send the message to the sender of the command
  //

  Bot.sendMessage({
    'to': data.channelID,
    'message': message
  });

};
