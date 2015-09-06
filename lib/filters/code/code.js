module.exports = {
    filter: function(data, Bot, Config, Helpers){
        if(this.isCode(data.message)){
            Bot.deleteMessage({
                channel: data.channelID,
                messageID: data.rawEvent.d.id
            });
            require('node-pastie').create(data.message, function(err, url) {
                Bot.sendMessage({
                    'to': data.channelID,
                    'message': 'Woops trop de code @' + data.user + " ! " + url
                });
            });
        }
    },
    isCode: function(message){
        return message.match('(.*}.*\n)+' );
    }
}