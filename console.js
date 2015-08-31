var Chalk;
Chalk = require('chalk');

//
// Redefine some console methods
//

GLOBAL.console.info = function() {

  var data = [];
  var originalArguments = arguments;

  Object.keys(arguments).forEach(function(v) {

    data.push(Chalk.blue(originalArguments[v]));

  });

  console.log.apply(console, data);

};

GLOBAL.console.warn = function() {

  var data = [];
  var originalArguments = arguments;

  Object.keys(arguments).forEach(function(v) {

    data.push(Chalk.yellow(originalArguments[v]));

  });

  console.log.apply(console, data);

};

GLOBAL.console.error = function() {

  var data = [];
  var originalArguments = arguments;

  Object.keys(arguments).forEach(function(v) {

    data.push(Chalk.red(originalArguments[v]));

  });

  console.log.apply(console, data);

};

GLOBAL.console.success = function() {

  var data = [];
  var originalArguments = arguments;

  Object.keys(arguments).forEach(function(v) {

    data.push(Chalk.green(originalArguments[v]));

  });

  console.log.apply(console, data);

};