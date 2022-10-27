var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (Object.keys(req.query).length === 0) {
        var x=Math.random();
        res.render('computation', { value: `Math.hypot() applied to ${x} is ${Math.hypot(x)}`,
        value1: `Math.ceil() applied to ${x} is ${Math.ceil(x)}` ,
        value2: `Math.clz32() applied to ${x} is ${Math.clz32(x)}` });
      }
      else{
    
        for (let a in req.query) {
    
          console.log(a)
    
          res.render('computation', { value: `Math.hypot() applied to ${req.query[a]} is ${Math.hypot(req.query[a])}`,
          value1: `Math.ceil() applied to ${req.query[a]} is ${Math.ceil(req.query[a])}` ,
          value2: `Math.clz32() applied to ${req.query[a]} is ${Math.clz32(req.query[a])}` })
    
        }
      }
    
    
    });

module.exports = router;
