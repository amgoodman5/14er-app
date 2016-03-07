var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Fourteeners = function(){
  return knex('14erList');
}

var Trails = function(){
  return knex('14erTrails');
}

router.get("/:id/trails", function(req,res){
  Fourteeners().where({id: req.params.id}).first().then(function(payload){
    Trails().where({mountainid: req.params.id}).then(function(payload2) {
      res.json(payload2);
    })
  });
});

module.exports = router;
