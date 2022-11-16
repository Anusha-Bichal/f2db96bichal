var express = require('express');
const fish_controlers= require('../controllers/fish');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('fish', { title: 'Search Results fish' });
// });
/* GET detail fish page */ 
router.get('/detail', fish_controlers.fish_view_one_Page); 
/* GET fish */ 
router.get('/', fish_controlers.fish_view_all_Page ); 
// GET request for one fish. 
router.get('/fish/:id', fish_controlers.fish_detail);
/* GET create fish page */ 
router.get('/create', fish_controlers.fish_create_Page); 
/* GET create update page */ 
router.get('/update', fish_controlers.fish_update_Page); 
/* GET delete fish page */ 
router.get('/delete', fish_controlers.fish_delete_Page); 

module.exports = router;