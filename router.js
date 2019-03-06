//2. Handle HTTP route GET /and POST / i.e. Home
function home(req, res) {
  if(req.url === "/") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Header\n");
    res.write("Search\n");
    res.end("Footer\n");
  }
}
  //if url ==="/" && GET
    //show search
  //if url =="/" && POST
    //redirect to /:username

//3. Handle HTTP route GET /:username i.e. /shalkers
function user(req, res) {
  var username = req.url.replace("/", "");
  if(username.length > 0) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Header\n");
    res.write(username + "\n");
    res.end("footer\n");
  }
}

module.exports.home = home;
module.exports.user = user;