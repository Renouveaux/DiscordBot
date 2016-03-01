module.exports = function(data, Bot, Config, Helpers) {

	var content = [];

	Bot.getMessages({
		channel: "106702700409815040",
		limit: 1000
	}, function(error, messageArr) {

		for(i=0; i < messageArr.length; i++){
			content.push({
				author: messageArr[i].author.username,
				content: messageArr[i].content
			});
		}

		fs.appendFile('link.json', JSON.stringify(content), function(err){
			if (err) throw err;
			console.log('It\'s saved!');
		});
	});

};

var fs = require('fs');