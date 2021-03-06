var BetterConsole;
var fs;
var DiscordBot;
var PrettyError;
var event;
var Bot;
var Events;
var Helpers;
var Config;
var Promise;
var PouchDB;
var winston;

fs = require('fs-extra');
DiscordBot = require('discord.io');
PrettyError = require('pretty-error');
events = require('events');
Promise = require('promise');
PouchDB = require('pouchdb');
winston = require('winston');

Events = require('./lib/events');
Helpers = require('./lib/helpers');

PrettyError.start();

require('./console'); // redéfinit les couleurs de la console.

GLOBAL.InternalEvents = new events.EventEmitter();

//
// On charge la configuration
//

Config = Helpers.getConfig(false);

//
// Initialisation du bot avec la config
//

Bot = new DiscordBot(Config.getConstructorConfig());


//
// Initialisation de la base de donnée
//

var db = new PouchDB('ratonBot', { db: require('leveldown') });


//
// Gestionnaire d'erreur 'Winston'
//

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'ratonBot.log' })
    ]
});

winston.handleExceptions(new winston.transports.File({ filename: 'exceptions.log' }))

debugger;
//
// Initialise les events
//

Events.init(Bot, Config, Helpers, db, logger);

console.info('Le bot se connecte ...');

//
// On change l'etat
//

Events.State.connection = true;

//
// On emet l'info
//

InternalEvents.emit('connection');

//
// Connexion du bot
//

Bot.connect();

/*
 * PM2 Trigger
*/

var pmx = require('pmx');

pmx.action('restart', function(reply) {
  reply({success : true});
  process.exit(0);
});