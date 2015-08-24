module.exports = function(data, Bot, Config) {

  //
  // Verify data
  // -----------
  //

  // ---
  //
  // TODO:
  //
  // Replace
  //
  // ```
  // throw new Error('an error')
  // ```
  //
  // by
  //
  // ```
  // console.error('an error');
  // return;
  // ```
  //
  // ---

  //
  // `data`
  //

  if(!data)
    throw new Error('\'data\' doesn\'t exist.');

  //
  // ---
  //

  //
  // Username
  //

  if(!data.user)
    throw new Error('No username defined');

  //
  // ---
  //

  //
  // User id
  //

  if(!data.userID)
    throw new Error('No user id defined.');

  //
  // ---
  //

  //
  // Channel id
  //

  if(!data.channelID)
    throw new Error('No channel id defined.');

  //
  // ---
  //

  //
  // `rawEvent`
  //

  if(!data.rawEvent)
    throw new Error('No \'rawEvent\' defined.');

  //
  // ---
  //

  //
  // Verify message is a commands
  //

  if(!checkIsCommand(data.message, Config))
    return;

  //
  // ---
  //

  switch (getCommandPart(data.message, '1', Config)) {

    case 'echo':
      echo(data, Bot, Config);
    default:
      break;

  }

};

//
// Private area
// =============
//

//
// Helpers
// -------
//

//
// Check if it is a command
//

var checkIsCommand = function(message, Config) {

  if(message.slice(0, Config.commandSymbol.length)[0] == Config.commandSymbol)
    return true;

  return false;

};

//
// ---
//

//
// Get command part
//

var getCommandPart = function(message, part, Config) {

  //
  // Remove command symbol
  //

  message = message.replace(new RegExp(Config.commandSymbol), '');

  //
  // After/before a part
  //

  if(part.slice(0, 1)[0] == '>' || part.slice(0, 1)[0] == '<') {

    //
    // After
    //

    if(part.slice(0, 1)[0] == '>') {

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

    else {

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

//
// Define commands
// ---------------
//

//
// echo {something}
//

var echo = require('./echo/echo');
