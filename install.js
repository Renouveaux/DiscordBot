var prompt = require('prompt');
var fs = require('fs');
var extend = require('util')._extend
prompt.message = "";
prompt.delimiter = "";

console.log("/**********************************/".magenta);
console.log("/                                  /".magenta);
console.log("/             Bienvenue            /".magenta);
console.log("/        Configurateur du Bot      /".magenta);
console.log("/                                  /".magenta);
console.log("/            Discord Bot           /".magenta);
console.log("/                                  /".magenta);
console.log("/**********************************/".magenta);

console.log("Merci de renseigner les informations demandées".cyan);

var properties = [
{
	description: 'Email Discord : ',
	name: 'email',
	format: 'email'
},{
	description: 'Mot de passe associé : ',
	name: 'password',
	hidden : true
},{
	description: 'Nom du bot : ',
	name: 'botName'
},{
	description: 'Prefix de commande : ',
	name: 'commandPrefix',
	default: '!'
},{
	description: 'Reconnexion automatique du bot (true|false) : ',
	name: 'autoReconnect',
	type: 'boolean',
	default: false,
	conform: function(autoReconnect){
		return (autoReconnect === true || autoReconnect === false);
	}
},{
	description: 'Mode debug : ',
	name: 'debug',
	type: 'boolean',
	default: false,
	conform: function(debug){
		return (debug === true || debug === false);
	}
}
];

var defaultData = {
	"admin": [],
	"global": {
		"share": "http://codeshare.io",
		"screen": "https://lut.im"
	},
	"API": {
		"pastebin": {
		  "key": "",
		  "username": "",
		  "password": ""
		},
		"pastee": {
		  "key": ""
		},
		"bitly": {
		  "key": ""
		}
	},
	"allowedChannelIds": {},
	"protectedKeys": [
	"email",
	"password"
	]
}


prompt.start();

prompt.get(properties, function (err, result) {
	if (err) { 
		return onErr(err); 
	}

	var data = extend({}, defaultData);
	extend(data, result);

	console.log('Enregistrement de vos informations dans le fichier config.json'.red);

	fs.writeFile('config.json', JSON.stringify(data, null, 4), function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log('Enregistrement de la configuration du bot terminé'.green);
			console.log("Vous pouvez maintenant lancer l'application via la commande node index.js".yellow);
		}
	}); 
	
});

function onErr(err) {
	console.log("Une erreur importante est survenue".red);
	console.log("Merci de contacter le développeur en indiquant l'erreur suivante :".red);
	console.log(err.red);
	process.exit(code=1);
}