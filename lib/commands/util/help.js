module.exports = function(data, Bot, Config) {

  //
  // Require the multiline module
  //

  var multiline = require('multiline');

  //
  // Send the help to the sender
  //

  Bot.sendMessage({
    'to': data.channelID,
    'message': '@' + data.user + ' \n' + multiline.stripIndent(function() {/*
      Format : 'util {sub-command} ...'

      Sub-commands :
      - channel-id :
          Return the channel id.
      - help :
          Return the help to the user.
      - my-id
          Return your id.
    */})
  });

};
