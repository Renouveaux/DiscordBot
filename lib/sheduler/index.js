var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.minute = 1;

var j = schedule.scheduleJob(rule, function(){
    console.log('The answer to life, the universe, and everything!');
});
