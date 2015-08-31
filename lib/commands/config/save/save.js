module.exports = function(data, Bot, Config) {

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
  // Save the configuration
  //

  var fs = require('fs-extra');

  fs.writeJsonSync('./config.json', Config);

  //
  // Generate the message
  //

  var message = '';

  message += '@';
  message += data.user;
  message += ' ';

  message += 'La configuration à été enregistrée.';

  //
  // Show in the console
  //

  console.info('Sauvegarde ok.');

  //
  // Send the message to the sender of the command
  //

  Bot.sendMessage({
    'to': data.channelID,
    'message': message
  });

}
