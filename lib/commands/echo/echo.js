module.exports = function(data, Bot, Config) {

  var echo = '';

  data.message.split(' ').forEach(function(v, i, a) {

    if(i < 1)
      return;

    echo += v;

    if(i == a.length - 1)
      return;

    echo += ' ';

  });

  Bot.sendMessage({
    'to': data.channelID,
    'message': echo
  });

};
