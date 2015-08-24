// Variables zone
// ==============

// Initialize pretty-error
// -----------------------

require('pretty-error').start();

// Initialize better console
// -------------------------

console = require('better-console');

// Define variables
// ----------------

var Bot;
var Config;
var Discordbot;
var fs;
var getConfig;
var messageHandler;
var setConfig;
var State;
var Promise;
var readFile;
var writeFile;

// Require module
// --------------

Discordbot = require('node-discord');
fs = require('fs-extra');
Promise = require('promise');

// Denodeify functions
// -------------------

readFile = Promise.denodeify(fs.readFile);
writeFile = Promise.denodeify(fs.writeFile);

// Helpers
// -------

getConfig = function (options, callback) {

  if(options.sync) {
    return JSON.parse(fs.readFileSync('config.json', 'utf8'));
  }

  return readFile('config.json', 'utf8').then(JSON.parse).nodeify(callback);

};

setConfig = function(data, options, callback) {

  if(options.sync) {
    return fs.writeFileSync('config.json', JSON.stringify(data));
  }

  return writeFile('config.json', JSON.stringify(data)).nodeify(callback);

};

messageHandler = require('./messageHandler');

// Get config
// ----------

Config = getConfig({
  'sync': true
});

if(!Config.username) throw new Error('No username defined into the config file.');
if(!Config.password) throw new Error('No password defined into the config file.');

// Initialize Bot
// --------------

Bot = new Discordbot({
  'username': Config.username,
  'password': Config.password,
  'autorun': false
});

//
// ---
//

// Events zone
// ===========

State = {};

State.ready = false;
State.connected = false;
State.connection = false;
State.disconnection = false;

// Errors
// ------

Bot.on('err', function(err) {

  throw new Error(err);

});

// Ready
// -----

Bot.on('ready', function(rawEvent) {

  console.info('Connected !')
  console.log('----------')
  console.log('Logged in as: ')
  console.log(Bot.username);
  console.log(Bot.id);

  State.ready = true;
  State.connected = true;
  State.connection = false;

});


// Disconnected
// ------------

Bot.on('disconnected', function() {

  console.warn('Disconnected !');

  State.connected = false;

  if(!State.disconnection && Config.autoReconnect) {

    console.log('You ask for auto reconnection.');
    console.info('Connection ...');

    State.connection = true;

    Bot.connect();

  }

});

// Debug
// -----

Bot.on('debug', function(rawEvent) {

  if(Config.debug)
    console.log(rawEvent);

});

// Message
// -------

Bot.on('message', function(user, userID, channelID, message, rawEvent) {

  if(State.ready && State.connected && !State.deconnection)
    messageHandler(user, userID, channelID, message, rawEvent, Bot, Config);

});

console.info('Connection ...');

State.connection = true;

Bot.connect();
