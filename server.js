var http = require('http');
var app = require('./config/express')();
var DB_URL = process.env.MONGOLAB_URI || 'mongodb://localhost/generic';

require('./config/db.js')(DB_URL);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server - Port: ' + app.get('port'));
})
