var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({
        object: {
        }
    });
    
    return mongoose.model('Object', schema);
}
