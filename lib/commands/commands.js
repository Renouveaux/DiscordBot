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

  switch (Helpers.getCommandPart(data.message, '1', Config)) {

    case 'share':
      share(data, Bot, Config, Helpers);
    break;

    case 'config':
      config(data, Bot, Config, Helpers);
    break;

    default:
      
    break;

  }

  Bot.deleteMessage({
    channel: data.channelID,
    messageID: data.rawEvent.d.id
  });

};

var share = require('./share/share');

var config = require('./config/config');