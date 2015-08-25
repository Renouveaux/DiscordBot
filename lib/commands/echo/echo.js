module.exports = function(data, Bot, Config) {

  //
  // Declare the returned string
  // ---------------------------

  var echo = '';

  //
  // ---
  //

  //
  // Define the returned string
  // --------------------------

  //
  // Add the name of the sender of the command
  //

  echo += '@';
  echo += data.user;
  echo += ' ';

  //
  // ---
  //

  //
  // Add the string of the user
  //

  data.message.split(' ').forEach(function(v, i, a) {

    if(i < 1)
      return;

    echo += v;

    if(i == a.length - 1)
      return;

    echo += ' ';

  });

  //
  // ---
  //

  //
  // Send the string
  // ---------------

  Bot.sendMessage({
    'to': data.channelID,
    'message': echo
  });

};
