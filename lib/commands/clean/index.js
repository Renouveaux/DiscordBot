module.exports = function(data, Bot, Config, Helpers) {

  var value = Helpers.getCommandPart(data.message, '2', Config);

  if(Config.admin.indexOf(data.userID) == -1) {

    var message = '';

    message += '@';
    message += data.user;
    message += ' ';

    message += 'Vous n\'avez pas la permission d\'effectuer cette commande'

    Bot.sendMessage({
      'to': data.channelID,
      'message': message
    })

    return;

  }

  if(typeof value !== 'undefined'){

    switch(value){
      case 'all' : 

      Bot.getMessages({
        channel: data.channelID,
        limit: 500000
      }, function(messageArr) {

        for(i=0; i < messageArr.length; i++){
          Bot.deleteMessage({
            channel: data.channelID,
            messageID: messageArr[i].id
          });
        }
      });

      break;

      default:


      Bot.getMessages({
        channel: data.channelID,
        limit: parseInt(value)
      }, function(messageArr) {

        for (i = 0; i < messageArr.length; i++) { 

          Bot.deleteMessage({
            channel: data.channelID,
            messageID: messageArr[i].id
          });

        }

      });

      break;


    }

  }else{

    Bot.sendMessage({
      'to': data.userID,
      'message': 'merci de spécifier un paramètre'
    });


  }

};
