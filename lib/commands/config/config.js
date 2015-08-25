module.exports = function(data, Bot, Config) {

  //
  // Get which command the sender has wrote
  //

  switch(getCommandPart(data.message, '2', Config)) {

    //
    // config get {key}
    //

    case 'get':
      get(data, Bot, Config);
      break;

    //
    // config help
    //

    case 'help':
      help(data, Bot, Config);
      break;

    //
    // config save
    //

    case 'save':
      save(data, Bot, Config);
      break;

    //
    // config set {key} {value}
    //

    case 'set':
      set(data, Bot, Config);
      break;

    //
    // config
    //

    default:
      help(data, Bot, Config);
      break;

  }

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

//
// Define commands
// ---------------
//

//
// config get {key}
//

var get = require('./get/get');

//
// config help
// or
// config
//

var help = require('./help');

//
// config save
//

var save = require('./save/save');

//
// config set {key} {value}
//

var set = require('./set/set');
