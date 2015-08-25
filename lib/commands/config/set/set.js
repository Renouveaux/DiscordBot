module.exports = function(data, Bot, Config) {

  //
  // Get the key
  //

  var key = getCommandPart(data.message, '3', Config);

  //
  // Get the value
  //

  var value = getCommandPart(data.message, '>3', Config);

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

    message += 'You don\'t have the permission to use this command.'

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

  if(Config.protectedKeys.indexOf(key) != -1 && key != '') {

    //
    // Generate the message
    //

    var message = '';

    message += '@';
    message += data.user;
    message += ' ';

    message += 'This key is protected.';

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

    message += 'This key doesn\'t exist in the config.'

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
  // Set value for key
  //

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

  //
  // Generate the message
  //

  var message = '';

  message += '@';
  message += data.user;
  message += ' ';

  message += 'The key "' + key + '" is now equal to "' + value + '".';

  //
  // Send the message to the sender of the command
  //

  Bot.sendMessage({
    'to': data.channelID,
    'message': message
  });

};

//
// Private zone
// ============
//

//
// Helpers
// -------
//

//
// Get command part
//

var getCommandPart = function(message, part, Config) {

  //
  // Remove command symbol
  //

  message = message.replace(new RegExp(Config.commandPrefix), '');

  //
  // After/before a part
  //

  if(part.slice(0, 1) == '>' || part.slice(0, 1) == '<') {

    //
    // After
    //

    if(part.slice(0, 1) == '>') {

      var parts = Number(part.split('>')[1]);

      var data = '';

      message.split(' ').forEach(function(v, i, a) {

        if(i <= parts - 1)
          return;

        data += v;

        if(i == a.length - 1)
          return;

        data += ' ';

      });

      return data;

    }

    //
    // Before
    //

    else if(part.slice(0, 1) == '<') {

      var parts = Number(part.split('<')[1]);

      var data = '';

      message.split(' ').forEach(function(v) {

        if(i >= parts - 1)
          return

        data += v;

        if(i == parts - 2)
          return;

        data += ' ';

      });

      return data;

    }

  }

  //
  // A part
  //

  return message.split(' ')[part - 1];

};
