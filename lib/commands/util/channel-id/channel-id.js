module.exports = function(data, Bot, Config) {

  //
  // Generate the message
  //

  message = '';

  message += '@';
  message += data.user;
  message += ' ';

  message += 'The ID of the channel is : ';
  message += data.channelID;

  //
  // Send the id of the channel to the sender
  //

  Bot.sendMessage({
    'to': data.channelID,
    'message': message
  });

};
