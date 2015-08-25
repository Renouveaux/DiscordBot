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
      Format : 'config {sub-command} ...'

      Sub-commands :
      - get {key}:
          Return the value for the config {key}.
      - help :
          Return the help to the user.
      - save :
          Save the config in the "config.json" file.
      - set {key} {value} :
          Set the value {value} for the config {key}.
    */})
  });

};
