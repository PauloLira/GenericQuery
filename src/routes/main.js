'use strict'
module.exports = function(app){
    var controller = app.controllers.MainController;

    app.route('/query').post(controller.query);
}
