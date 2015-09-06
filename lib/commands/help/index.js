module.exports = function(data, Bot, Config) {

  var multiline = require('multiline.js');

  Bot.sendMessage({
    'to': data.userID,
    'message': multiline(function(){/*
      Le prefix de commande actuel est #{prefix}
        
      Voici la liste de mes commandes disponibles;
      #{prefix}help : Affiche cette aide.
      #{prefix}ping : Test la connexion entre le bot et vous.
      #{prefix}share : Retourne l'adresse un site de partage de code.
      #{prefix}whois : Retourne des informations sur un utilisateur (Non implémenté).
      #{prefix}slap : Frappe un utilisateur (Non implémenté).

      (Administrateurs seulement)
      #{prefix}setprefix : Change le prefix de commande (Non implémenté).
      #{prefix}addowner : Ajoute un administrateur de bot (Non implémenté).
    */}, { prefix: Config.commandPrefix })
  });

};
