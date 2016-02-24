var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');


module.exports = function(){
    var port = process.env.PORT || 3000;
    var app = express();

    //port of service
    app.set('port', port);

    app.use('/api', express.static('doc/'));

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    load('models', {cwd: 'src'})
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
}
