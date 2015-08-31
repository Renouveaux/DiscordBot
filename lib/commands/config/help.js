module.exports = function(data, Bot, Config) {

  var multiline = require('multiline');

  Bot.sendMessage({
    'to': data.channelID,
    'message': '@' + data.user + ' \n' + multiline.stripIndent(function() {/*
      Format : 'config {sous-commande} ...'

      Sous-commande :
      - get {key}:
          Retourne la valeur de {key}.
      - help :
          Retourne cette aide.
      - save :
          Sauvegarde la config.
      - set {key} {value} :
          Enregistre la nouvelle {value} dans {key}.
    */})
  });

};
