//var njstrace = require('njstrace').inject()

//
// Define variables
// ================
//

//
// Modules from npm
// ----------------
//

var BetterConsole;
var Chalk;
var fs;
var DiscordBot;
var PrettyError;

//
// ---
//

//
// Modules from nodejs
// -------------------
//

var event;

//
// ---
//

//
// Classes
// -------
//

var Bot;

//
// ---
//

//
// Helpers
// ------
//

var Events;
var Helpers;

//
// ---
//

//
// Others
// ------
//

var Config;

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

Chalk = require('chalk');
fs = require('fs-extra');
DiscordBot = require('node-discord');
PrettyError = require('pretty-error');

//
// ---
//

//
// Modules from nodejs
// -------------------
//

events = require('events');

//
// ---
//

//
// Helpers
// -------
//

Events = require('./lib/events');
Helpers = require('./lib/helpers');

//
// ---
//

//
// Initialize modules
// ==================
//

//
// Modules from npm
// ----------------
//

//
// Start pretty-error
//

PrettyError.start();

//
// ---
//

//
// Redefine some console methods
//

GLOBAL.console.info = function() {

  var data = [];
  var originalArguments = arguments;

  Object.keys(arguments).forEach(function(v) {

    data.push(Chalk.blue(originalArguments[v]));

  });

  console.log.apply(console, data);

};

GLOBAL.console.warn = function() {

  var data = [];
  var originalArguments = arguments;

  Object.keys(arguments).forEach(function(v) {

    data.push(Chalk.yellow(originalArguments[v]));

  });

  console.log.apply(console, data);

};

GLOBAL.console.error = function() {

  var data = [];
  var originalArguments = arguments;

  Object.keys(arguments).forEach(function(v) {

    data.push(Chalk.red(originalArguments[v]));

  });

  console.log.apply(console, data);

};

GLOBAL.console.success = function() {

  var data = [];
  var originalArguments = arguments;

  Object.keys(arguments).forEach(function(v) {

    data.push(Chalk.green(originalArguments[v]));

  });

  console.log.apply(console, data);

};

//
// ---
//

//
// Modules from nodejs
// -------------------
//

//
// Internal events
//

GLOBAL.InternalEvents = new events.EventEmitter();

//
// ---
//

//
// Helpers
// -------
//

//
// Get configuration
//

Config = Helpers.getConfig(true);

//
// Classes
// -------
//

//
// Initialize the `Bot` class
//

Bot = new DiscordBot(Config.getConstructorConfig());

//
// ---
//

//
// Helpers ( 2nd )
// ---------------
//

//
// Init events
//

Events.init(Bot, Config);

//
// ---
//

//
// Start the bot
// =============
//

//
// Connect the bot
// ---------------
//

//
// Inform the user
//

console.info('The bot will connect ...');

//
// Change the state
//

Events.State.connection = true;

//
// Emit the informations
//

InternalEvents.emit('connection');

//
// Connect the bot
//

Bot.connect();
