var request = require('request');
request('http://codeshare.io/new', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response.request.href) // Show the HTML for the Google homepage.
  }
})