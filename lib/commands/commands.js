module.exports = function(data, Bot, Config, Helpers) {

  if(data.userID == Bot.id)
    return;
  
  if(!data)
    throw new Error('\'data\' doesn\'t exist.');

  if(!data.user)
    throw new Error('No username defined');

  if(!data.userID)
    throw new Error('No user id defined.');

  if(!data.channelID)
    throw new Error('No channel id defined.');

  if(!data.rawEvent)
    throw new Error('No \'rawEvent\' defined.');

  if(!Helpers.checkIsCommand(data.message, Config))
    return;

  var key = Helpers.getCommandPart(data.message, '1', Config);

  try {
    var key = require('./'+key)(data, Bot, Config, Helpers);
  }catch (e) {
    console.log(e)
    Bot.sendMessage({
      'to': data.userID,
      'message': "Désolé, cette commande n'existe pas."
    });

    require('./help')(data, Bot, Config, Helpers);
  }

  Bot.deleteMessage({
    channel: data.channelID,
    messageID: data.rawEvent.d.id
  });

};