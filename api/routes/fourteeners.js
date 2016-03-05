var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Fourteeners = function(){
  return knex('14erList');
}

router.get("/", function(req,res){
   Fourteeners().select().then(function(payload){
     res.json(payload);
   });
});

router.get("/:id", function(req,res){
   Fourteeners().where({id: req.params.id}).then(function(payload){
     res.json(payload);
   });
});


module.exports = router;
