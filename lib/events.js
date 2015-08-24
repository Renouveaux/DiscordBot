module.exports = {

  //
  // Init
  // ----
  //

  init: function(Bot, Config) {

    //
    // On error
    //

    var that = this

    Bot.on('err', function(err) {

      that.onError({
        'err': err
      }, Bot, Config);

    });

    //
    // ---
    //

    //
    // On ready
    //

    Bot.on('ready', function(rawEvent) {

      that.onReady({
        'rawEvent': rawEvent
      }, Bot, Config);

    });

    //
    // ---
    //

    //
    // On disconnected
    //

    Bot.on('disconnected', function() {

      that.onDisconnected({}, Bot, Config);

    });

    //
    // ---
    //

    //
    // On event ( debug )
    //

    Bot.on('debug', function(rawEvent) {

      that.onDebug({
        'rawEvent': rawEvent
      }, Bot, Config);

    });

    //
    // ---
    //

    //
    // On message
    //

    Bot.on('message', function(user, userID, channelID, message, rawEvent) {

      that.onMessage({
        'user': user,
        'userID': userID,
        'channelID': channelID,
        'message': message,
        'rawEvent': rawEvent
      }, Bot, Config);

    });

    //
    // ---
    //

    //
    // On presence
    //

    Bot.on('presence', function(user, userID, status, rawEvent) {

      that.onPresence({
        'user': user,
        'userID': userID,
        'status': status,
        'rawEvent': rawEvent
      }, Bot, Config);

    });

  },

  //
  // ---
  //

  //
  // On error
  // --------
  //

  onError: function(data, Bot, Config) {

    // ---
    //
    // TODO:
    //
    // Replace
    //
    // ```
    // throw new Error('an error');
    // ```
    //
    // by
    //
    // ```
    // console.error('an error');
    // process.exit(1);
    // ```
    //
    // ---

    //
    // Throw the error
    //

    throw new Error(data.err);

  },

  //
  // ---
  //

  //
  // On ready
  // --------
  //

  onReady: function(data, Bot, Config) {

    //
    // Inform the user
    //

    console.success('The bot is now connected.');

    //
    // Emit the information
    //

    InternalEvents.emit('connected');

    //
    // Change the state
    //

    this.State.connected = true;
    this.State.connection = false;

  },

  //
  // ---
  //

  //
  // On disconnected
  // ---------------
  //

  onDisconnected: function(data, Bot, Config) {

    //
    // Warn the user
    //

    console.warn('The bot is now disconnected ...');

    //
    // Check is the disconnection is normal
    //

    if(this.State.disconnection == true)
      return;

    //
    // Else check if the `autoReconnect` value ( of the configuration ) is set
    // to true
    //

    if(Config.autoReconnect != true)
      return;

    //
    // Then inform the user
    //

    console.info('The bot will automatically reconnect ...');

    //
    // Change the state
    //

    this.State.connected = false;
    this.State.connection = true;

    //
    // Emit the informations
    //

    InternalEvents.emit('connection');

    //
    // And reconnect the bot
    //

    Bot.connect();

  },

  //
  // ---
  //

  //
  // On event ( debug )
  // ------------------
  //

  onDebug: function(data, Bot, Config) {

    if(!Config.debug)
      return;

    //
    // Show the informations to the user
    //

    console.log(
      'debug:',
      '\n',
      data.rawEvent
    );

  },

  //
  // ---
  //

  //
  // On message
  // ----------
  //

  onMessage: function(data, Bot, Config) {

    //
    // Send the message to the commands handler
    //

    this.commands(data, Bot, Config);

  },

  //
  // ---
  //

  //
  // On presence
  // -----------
  //

  onPresence: function(data, Bot, Config) {



  },

  //
  // ---
  //

  //
  // Private variables
  // -----------------
  //

  //
  // Get modules from npm
  //

  commands: require('./commands/commands'),

  //
  // ---
  //

  //
  // Define State
  //

  State: {
    'connected': false,
    'connection': false,
    'disconnection': false
  }

};
