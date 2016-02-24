'use strict'
var fs = require('fs')
var querystring = require('querystring')
var http = require('http')
var Async = require('async')
var moment = require('moment')

module.exports = function(app) {
    var controller = {};
    var token = "";
    var object = app.models.Object;

  /**
    * @apiName QueryData
    * @apiGroup Items
    * @api {post} /query
    * @apiParam {String} Object
    * @apiExample {curl} Example usage:
    *             curl -X POST -H "Content-Type: application/json"
    *             -d '{
    *             "Object": OBJECT
    *             }
    *             }' "https://dev-test-paulo-lira.herokuapp.com/query"
    *
    * @apiSuccess {Object} Object Saved.
    *
    * @apiError {json} Error-Response:
    *     HTTP/1.1 400 Bad Request
    *
    * @apiError {json} No-Content:
    *     HTTP/1.1 204 No Content
    *     {
    *       "Message" : "Error connecting to HotelBeds provider."
    *     }
    *
    *
    *
    **/
    controller.query = function(req, res) {
      var data = {};
      data.object = req.body;
      if (data !== null && data !== undefined) {
        object.create(data).then(function(resp){
            res.send(resp)
        })
      } else {
        res.status(400).end("Bad Request");
      }
    }


    return controller;
}
