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

  message += 'The configuration has been saved.';

  //
  // Show in the console
  //

  console.info('Config saved.');

  //
  // Send the message to the sender of the command
  //

  Bot.sendMessage({
    'to': data.channelID,
    'message': message
  });

}
