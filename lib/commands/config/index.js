module.exports = function(data, Bot, Config, Helpers) {

  switch(Helpers.getCommandPart(data.message, '2', Config)) {

    case 'get':
      get(data, Bot, Config, Helpers);
      break;

    case 'help':
      help(data, Bot, Config, Helpers);
      break;

    case 'save':
      save(data, Bot, Config, Helpers);
      break;

    case 'set':
      set(data, Bot, Config, Helpers);
      break;

    default:
      help(data, Bot, Config, Helpers);
      break;
  }

};

var get = require('./get/get');

var help = require('./help');

var save = require('./save/save');

var set = require('./set/set');