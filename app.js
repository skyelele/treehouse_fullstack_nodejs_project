var router = require("./router.js");

// Problem: We need a simple way to look at a user's badge
// count and JavaScript point(s) from a web browser
// We want to do this as an HTML page in the server on
// the internet.
// Solution: Use Node.js to perform the profile look ups
// and server our template via HTTP
// I.e. get all profile information used in the profile.js
// file, and create a server and serve out all of our
// index profile with error pages.

//1. Create a web server

var http = require('http');
http.createServer(function (req, res) {
  router.home(req, res);
  router.user(req, res);
}).listen(3000);
console.log('Server running at http://<workspace-url>');


  //if url == "/..." (anything)
    //get json from Treehouse
      //on "end"
        //show the profile
      //on "error"
        //show error

//4. Function that handles the reading of files and
//merge in values. I.e. when we get the information,
//we want to populate that into our HTML.
  //read from file and get a string
    // merge values in to string
//i.e. do quick search of template file,
//populate the info we get from the JSON from treehouse