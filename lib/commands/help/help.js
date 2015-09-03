module.exports = function(data, Bot, Config) {

  var multiline = require('multiline.js');

  var toto = multiline(function() {/*
      Voici la liste de mes commandes disponibles;
      &help : Shows this list.
      &ping : Tests connection speed between me and you.
      &whois : Get's basic information about a user.
      &slap : Slap a user.
      &savequote : Tell me some of your favourite quotes!
      &randomquote : Let me tell you a random quote!
      &roll : Roll a dice. You can roll more than one by adding a "d" and another number.
      &setprefix : (OWNER ONLY) Sets the prefix used to use commands.
      &addowner : (OWNER ONLY) Adds a user to the owner list
      &ignore : (OWNER ONLY) Adds a user to the ignore list

    */}), prefix;

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
