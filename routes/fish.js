var express = require('express');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fish', { title: 'Search Results fish' });
});
var express = require('express');
const fish_controlers= require('../controllers/fish');
var router = express.Router();
/* GET fish */
router.get('/', fish_controlers.fish_view_all_Page );
module.exports = router;
// GET request for one fish.
router.get('/fish/:id', fish_controlers.fish_detail);
/* GET detail fish page */
router.get('/detail',secured, fish_controlers.fish_view_one_Page);
/* GET create fish page */
router.get('/create', fish_controlers.fish_create_Page);
/* GET create update page */
router.get('/update',secured, fish_controlers.fish_update_Page);
/* GET delete fish page */
router.get('/delete',secured, fish_controlers.fish_delete_Page);