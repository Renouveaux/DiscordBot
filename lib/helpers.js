module.exports = {

  //
  // Get the config file
  // -------------------
  //

  getConfig: function(save) {

    //
    // Define variables
    //

    var config = {};

    //
    // ---
    //

    //
    // Get the config
    //

    config = fs.readJsonSync('config.json', { throws: false }) || config;

    //
    // ---
    //

    //
    // Verify config
    //

    if(!config.username)
      throw new Error('There is no username defined into the config file.');

    if(!config.password)
      throw new Error('There is no password defined into the config file.');

    //
    // ---
    //

    //
    // Set default values
    //

    config.admin = config.admin || [];
    config.autoReconnect = config.autoReconnect || false;
    config.commandPrefix = config.commandPrefix || '/';
    config.debug = config.debug || false;
    config.allowedChannelIds = config.allowedChannelIds || {};

    config.commandPrefix.replace(new RegExp(' ', 'g'), '')

    //
    // ---
    //

    //
    // Add the helpers
    //

    config.getConstructorConfig = function(autorun) {

      var constructorConfig = {};

      constructorConfig.username = config.username;
      constructorConfig.password = config.password;
      constructorConfig.autorun = autorun || false;

      return constructorConfig;

    };

    //
    // ---
    //

    //
    // Save the edited config
    //

    if(save) {

      fs.writeJsonSync('./config.json', config);

    }

    //
    // ---
    //

    //
    // Return configuration
    //

    return config;

  }

};

//
// Define variables
// ================
//

//
// Modules from npm
// ----------------
//

var fs;

//
// ---
//

//
// Require modules
// ===============
//

//
// Modules from npm
// ----------------
//

fs = require('fs-extra');
