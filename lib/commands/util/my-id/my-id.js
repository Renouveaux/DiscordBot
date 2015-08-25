module.exports = function(data, Bot, Config) {

  //
  // Generate the message
  //

  message = '';

  message += '@';
  message += data.user;
  message += ' ';

  message += 'Your ID is : ';
  message += data.userID;

  //
  // Send his id to the sender
  //

  Bot.sendMessage({
    'to': data.channelID,
    'message': message
  });

};
