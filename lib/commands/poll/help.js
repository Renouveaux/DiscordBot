module.exports = function(data, Bot, Config) {

  var multiline = require('multiline.js');

  Bot.sendMessage({
    'to': data.userID,
    'message': multiline(function() {/*
		Liste des commandes pour l'utilisation du système de sondage.

		#{prefix}poll create "<question>" - (pm only) create new poll in progress, ex. `poll create "which one?"`
		#{prefix}poll add option "<option>" - (pm only) add an option to a poll currently in progress, ex. `poll add option "some option"`
		#{prefix}poll preview - (pm only) preview a poll currently in progress
		#{prefix}poll done - (pm only) finish and activate a poll currently in progress
		#{prefix}poll random - (pm only) show details for a random poll
		#{prefix}poll vote <poll number> <option letter> - (pm only) vote on a poll, ex. `poll vote 1 a`
		#{prefix}hubot poll list - (public or pm) lists all existing polls
		#{prefix}hubot poll show <poll number> - (public or pm) show details for a single poll, ex. `hubot poll show 1`
		#{prefix}hubot poll results <poll number> - (public or pm) list results for a single poll (public or private), ex. `hubot poll results 1`

    */}, { prefix: Config.commandPrefix })
  });

};