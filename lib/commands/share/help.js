module.exports = function(data, Bot, Config) {

  var multiline = require('multiline');

  Bot.sendMessage({
    'to': data.userID,
    'message': multiline.stripIndent(function() {/*
      Format : 'share {sous-commande} ...'

      Sous-command :
      - help :
          Retourne cet aide.
      - @user
          Envoie le share en notice à l'utilisateur spécifié.
    */})
  });

};
