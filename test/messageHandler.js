module.exports = function(user, userID, channelID, message, rawEvent, Bot, Config) {

  // Commands
  if(isABotCommand(message)) {

    // echo [string]
    if(getArgument(message, 2) == "echo" && userID !== Bot.id) {

      if(Config.allowedChannelId && !Config.allowedChannelId[channelID])
        return;

      Bot.sendMessage({
        'to': channelID,
        'message': addCC(sliceAfterArgument(message, 2), user) || addCC('There is no second argument ...', user.name)
      });

    }

    // channel-id
    if(getArgument(message, 2) == "channel-id" && userID !== Bot.id) {

      Bot.sendMessage({
        'to': channelID,
        'message': addCC('The channel id is : ' + channelID + ' ;)', user)
      });

    }

  } else {

    if(Config.allowedChannelId && !Config.allowedChannelId[channelID])
      return;

    // bad words
    if(userID !== Bot.id) {

      if(filter.clean(message) != message) {

        Bot.sendMessage({
          'to': channelID,
          'message': addCC('You use bad words and this make me cry ;(', user)
        });

      }

    }

  }

};

var Filter = require('bad-words');
var filter = new Filter();

// Private functions
// =================

// Message is a command
// --------------------

var isACommand = function(message) {

  if(message.slice(0, 1) == '/')
    return true;

  return false;

};

// Message is a bot command
// ------------------------

var isABotCommand = function(message) {

  if(message.slice(0, 4) == '/bot')
    return true;

  return false;

};

// Get command arguments
// ---------------------

var getArguments = function(command) {

  return command.split(' ');

};

// Get an argument
// ---------------

var getArgument = function(command, number) {

  return command.split(' ')[number - 1] || null;

};

// Split after argument
// --------------------

var sliceAfterArgument = function(command, number) {

  var commandArguments = getArguments(command);

  var value = '';

  commandArguments.forEach(function(v, i) {

    if(i < number)
      return;

    value += v;

    if(i == commandArguments.length - 1)
      return;

    value += ' ';

  });

  return value;

};

// add CC to message
// -----------------

var addCC = function() {

  var message = '';

  var functionArguments = arguments;

  Object.keys(functionArguments).forEach(function(v, i) {

    v = functionArguments[v];

    if(i == 0)
      return;

    message += '@';
    message += v;

    if(i == functionArguments.length - 1) {
      message += ' ';
      return;
    }

    message += ', ';

  });

  message += arguments[0];

  return message;

};
