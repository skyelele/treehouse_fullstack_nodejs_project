var Profile   = require("./profile.js");
var renderer  = require("./renderer.js");

//Handle HTTP route GET /and POST / i.e. Home
function home(req, res) {
  if(req.url === "/") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, res);
    renderer.view("search", {}, res);
    renderer.view("footer", {}, res);
    res.end();
  }
}

//Handle HTTP route GET /:username i.e. /shalkers
function user(req, res) {
  var username = req.url.replace("/", "");
  if(username.length > 0) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, res);
   //get json from Treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON){
      //show profile
      
      //store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url, 
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      // simple response
      // (we need to write an END to EVERY callback that we use)
      renderer.view("profile", values, res);
      renderer.view("footer", {}, res);
      res.end();
    });
    studentProfile.on("error", function(error){
    //show error
      renderer.view("error", {errorMessage: error.message}, res);
      renderer.view("search", {}, res);
      renderer.view("footer", {}, res);
      res.end();
    });
  }
};

module.exports.home = home;
module.exports.user = user;