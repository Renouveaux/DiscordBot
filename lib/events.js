module.exports = {


  init: function(Bot, Config, Helpers) {

    var that = this

    Bot.on('err', function(err) {

      that.onError({
        'err': err
      }, Bot, Config);

    });

    Bot.on('ready', function(rawEvent) {


      that.onReady({
        'rawEvent': rawEvent
      }, Bot, Config);

    });

    Bot.on('disconnected', function() {

      that.onDisconnected({}, Bot, Config);

    });

    Bot.on('debug', function(rawEvent) {

      that.onDebug({
        'rawEvent': rawEvent
      }, Bot, Config);

    });

    Bot.on('message', function(user, userID, channelID, message, rawEvent) {

      that.onMessage({
        'user': user,
        'userID': userID,
        'channelID': channelID,
        'message': message,
        'rawEvent': rawEvent
      }, Bot, Config, Helpers);

    });

    Bot.on('presence', function(user, userID, status, rawEvent) {

      that.onPresence({
        'user': user,
        'userID': userID,
        'status': status,
        'rawEvent': rawEvent
      }, Bot, Config, Helpers);

    });

  },

  onError: function(data, Bot, Config) {

    throw new Error(data.err);

  },

  onReady: function(data, Bot, Config) {

    console.success('Le bot est connecté.');

    InternalEvents.emit('connected');

    this.State.connected = true;
    this.State.connection = false;

  },

  onDisconnected: function(data, Bot, Config) {

    console.warn('Le bot à été déconnecté');

    if(this.State.disconnection == true)
      return;

    if(Config.autoReconnect != true)
      return;

    console.info('Le bot sera automatiquement reconnecté ...');

    this.State.connected = false;
    this.State.connection = true;

    InternalEvents.emit('connection');

    Bot.connect();

  },

  onDebug: function(data, Bot, Config) {

    if(!Config.debug)
      return;

    console.log(
      'debug:',
      '\n',
      data.rawEvent
      );

  },

  onMessage: function(data, Bot, Config, Helpers) {

    this.filters(data, Bot, Config, Helpers);
    this.commands(data, Bot, Config, Helpers);

  },

  onPresence: function(data, Bot, Config, Helpers) { 

    this.database(data, Bot, Config, Helpers);

  },

  commands: require('./commands'),
  filters: require('./filters'),
  database: require('./db'),

  State: {
    'connected': false,
    'connection': false,
    'disconnection': false
  }

};
