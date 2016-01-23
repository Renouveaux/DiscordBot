module.exports = {

    filter: function(data, Bot, Config, Helpers) {

        if (this.isCode(data.message)) {
            Bot.deleteMessage({
                channel: data.channelID,
                messageID: data.rawEvent.d.id
            });

            var pastebin = require('pastebin')(Config.API.pastebin);
            pastebin.new({title: data.user, content: data.message}, function (err, url) {
                if (err)
                    Bot.sendMessage({
                        'to': data.channelID,
                        'message': "Désolé, il m'est impossible de créer une url pour ce code."
                    });
                else
                    Bot.sendMessage({
                        'to': data.channelID,
                        'message': 'Woops trop de code @' + data.user + " ! " + url
                    });
            });


        }


    },
    isCode: function(message) {



        String.prototype.m = function(condition) {
            return this.match(condition);
        };

        String.prototype.capitalize = function() {
            return this[0].toUpperCase() + this.substr(1);
        };

        function getFuncName(func) {
            var temp = func.toString();
            temp = temp.substr("function ".length);
            temp = temp.substr(0, temp.indexOf("("));
            return temp.capitalize();
        }

        var lang_input = message;


        function java(input) {
            var score = 0;
            score += input.m(/class[\s\n]+[\w$]+[\s\n]*\{/) ? 1 : 0;
            score += input.m(/public[\s\n]+static[\s\n]+void[\s\n]+main[\s\n]*/) ? 1 : 0;
            score += input.m(/\}[\s\n]*\}[\s\n]*$/) ? 1 : 0;
            score += input.m(/System[\s\n]*[.][\s\n]*out/) ? 1 : 0;
            return score;
        }

        function c(input) {
            var score = 0;
            if (checks[0][1] >= 3) return 0;

            score += input.m(/^#include\s+<[\w.]+>\s*\n/) ? 1 : 0;
            score += input.m(/main[\s\n]*\([\s\n]*(void)?[\s\n]*\)[\s\n]*\{/) ? 1 : 0;
            score += input.m(/printf[\s\n]+\(/) || input.m(/%d/) ? 1 : 0;
            score += input.m(/#include\s+<[\w.]+>\s*\n/) || input.m(/(%c|%f|%s)/) ? 1 : 0;
            return score;
        }

        function PHP(input) {
            var score = 0;
            score += input.m(/<\?php/) ? 1 : 0;
            score += input.m(/\?>/) ? 1 : 0;
            score += input.m(/echo/) ? 1 : 0;
            score += input.m(/$[\w]+\s*=\s*/) ? 1 : 0;
            return score;
        }

        function HTML(input) {
            var score = 0;
            if (checks[2][1] >= 2) return 0;

            score += input.m(/<!DOCTYPE ["' \w:\/\/]*>/) ? 1 : 0;
            score += input.m(/<html>/) && input.m(/<\/html>/) ? 1 : 0;
            score += input.m(/<body>/) && input.m(/<\/body/) ? 1 : 0;
            score += input.m(/<head>/) && input.m(/<\/head>/) ? 1 : 0;
            return score;
        }

        function javascript(input) {
            var score = 0;
            score += input.m(/console[\s\n]*[.][\s\n]*log[\s\n*]\(/) ? 1 : 0;
            score += input.m(/[\s\n]*var[\s\n]+/) ? 1 : 0;
            score += input.m(/[\s\n]*input[\s\n]*[.]+/) ? 1 : 0;
            score += input.m(/[\s\n]*function[\s\n]+[\w]+[\s\n]+\(/) ? 1 : 0;
            score += input.m(/document[\s\n]*[.]/) || (input.m(/\/\*/) && input.m(/\*\//)) || (input.m(/\/\/.*\n/)) ? 1 : 0;
            return score;
        }

        function CSS(input) {
            var score = 0;
            score += input.m(/[a-zA-Z]+[\s\n]*\{[\w\n]*[a-zA-Z\-]+[\s\n]*:/) ? 1 : 0;
            score += input.m(/color/) ? 1 : 0;
            score += input.m(/height/) || input.m(/width/) ? 1 : 0;
            score += input.m(/#[a-zA-Z]+[\s\n]*\{[\w\n]*[a-zA-Z\-]+[\s\n]*:/) ||
                input.m(/[.][a-zA-Z]+[\s\n]*\{[\w\n]*[a-zA-Z\-]+[\s\n]*:/) ||
                (input.m(/\/\*/) && input.m(/\*\//)) ? 1 : 0;
            return score;
        }

        var checks = [
            [java, 0],
            [c, 0],
            [PHP, 0],
            [HTML, 0],
            [javascript, 0],
            [CSS, 0]
        ];

        for (var i = 0; i < checks.length; i++) {
            var func = checks[i][0];
            checks[i][1] = func(lang_input);
        }

        checks.sort(function(a, b) {
            return b[1] - a[1];
        });

        var all_zero = true;

        function check_all_zero(index) {
            if (checks[index][1] > 0) {
                all_zero = false;
                return 0;
            }

            if (checks[index + 1])
                check_all_zero(index + 1);
        }

        check_all_zero(0);

        if (all_zero) {            
            return false;
        } else {
            var new_arr = [];

            checks.map(function(value, index) {
                if (value[1] > 0) {
                    var temp = [getFuncName(value[0]), value[1]];
                    new_arr.push(temp);
                }
            });

            checks = new_arr.slice(0);

            if(checks.length >= 1){
                return true
            }


        }



    }


}