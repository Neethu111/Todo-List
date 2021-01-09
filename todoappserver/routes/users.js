
var express = require('express');
var router = express.Router();
const todos = require('../services/todo');


router.post('/additem', function (req, res) {
  let label=req.body.label;
  todos.addItem(label)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message});
  });
});

router.get('/gettodos', function (req, res) {
  todos.getItem()
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,items:data.items});
  });
});

router.delete("/:id",function(req,res){
  todos.deleteTask(req.params.id)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message});
  });
});
module.exports = router;
