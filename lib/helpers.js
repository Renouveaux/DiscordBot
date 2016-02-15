module.exports = {

  getConfig: function(save) {

    var config = {};

    config = fs.readJsonSync('config.json', { throws: false }) || config;

    if(!config.email)
      throw new Error("Aucun email n'est spécifié dans le fichier de config.");

    if(!config.password)
      throw new Error("Aucun mot de passe n'est spécifié dans le fichier de config.");

    config.admin = config.admin || [];
    config.autoReconnect = config.autoReconnect || false;
    config.commandPrefix = config.commandPrefix || '/';
    config.debug = config.debug || false;
    config.allowedChannelIds = config.allowedChannelIds || {};

    config.commandPrefix.replace(new RegExp(' ', 'g'), '')

    config.getConstructorConfig = function(autorun) {

      var constructorConfig = {};

      constructorConfig.email = config.email;
      constructorConfig.password = config.password;
      constructorConfig.autorun = autorun || false;

      return constructorConfig;

    };

    config.getApiConfig = function() {

      var apiConfig = {};

      apiConfig.api_dev_key = config.API.pastebin.key;
      apiConfig.api_user_name = config.API.pastebin.username;
      apiConfig.api_user_password = config.API.pastebin.password;

      return apiConfig;

    }

    if(save) {

      fs.writeJsonSync('./config.json', config);

    }

    return config;

  },

  getCommandPart: function(message, part, Config) {

    message = message.replace(new RegExp(Config.commandPrefix), '');

    if(part.slice(0, 1) == '>' || part.slice(0, 1) == '<') {

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

      }else if(part.slice(0, 1) == '<') {

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

    return message.split(' ')[part - 1];

  },

  checkIsCommand: function(message, Config) {

    if(message.slice(0, Config.commandPrefix.length)[0] == Config.commandPrefix)
      return true;

    return false;

  }

};

var fs;

fs = require('fs-extra');
