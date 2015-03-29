var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

router.get('/', restrict, function(req, res, next){
  if (!req.user) {
    return res.redirect('/');
  }
  var vm = {
    title: 'place an order',
    firstName: req.user ? req.user.firstName : null
  }
  res.render('orders/index', vm);
})

module.exports = router;