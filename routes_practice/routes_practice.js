/** 
 * We've been tasked to continue with 
 * this prototype site. Have a look in 
 * the index.js and routes.js file and 
 * familiarize yourself. In the routes.js,
 *  just like the other two functions 
 * create an about function for a /about 
 * route. Have it print out "About\n" to 
 * the response. Remember to make this 
 * accessible by other files.
 */

/**
 *  Finally, in the index.js file, make
 *  sure that the about route is being 
 *  handled by the HTTP server.
 */

function root(request, response) {
    if(request.url == "/") {
        response.writeHead(200, {'Content-type': "text"});
        response.end("Home\n");
    }
}

function contact(request, response) {
    if(request.url == "/contact") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Contact\n");
    }
}

function about(request, response) {
    if(request.url == "/about") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Contact\n");
    }
}