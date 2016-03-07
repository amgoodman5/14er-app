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
  Trails().where({mountainid: req.params.id}).then(function(payload) {
    res.json(payload);
  });
});

module.exports = router;
