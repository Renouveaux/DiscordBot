module.exports = function(data, Bot, Config) {

  var multiline = require('multiline');

  Bot.sendMessage({
    'to': data.userID,
    'message': multiline.stripIndent(function() {/*
      Format : 'screen {sous-commande} ...'

      Sous-command :
      - help :
          Retourne cet aide.
      - @user
          Envoie le screen en notice à l'utilisateur spécifié.
    */})
  });

};
