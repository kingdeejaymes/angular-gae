var express = require( 'express' );
var path = require( 'path' );
var app = express();

app.use( express.static( 'build' ) );

// catchall route
app.get( function ( req, res ) {
  res.sendfile( path.join( __dirname, 'build', 'index.html' ) );
});
app.listen(8080);
