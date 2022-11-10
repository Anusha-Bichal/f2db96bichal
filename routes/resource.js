var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var fish_controller = require('../controllers/fish'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/fishs', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/fishs', fish_controller.fish_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/fishs/:id', fish_controller.fish_delete); 
 
// PUT request to update Costume. 
router.put('/fishs/:id', fish_controller.fish_update_put); 
 
// GET request for one Costume. 
router.get('/fishs/:id', fish_controller.fish_detail); 
 
// GET request for list of all Costume items. 
router.get('/fishs', fish_controller.fish_list); 
 
module.exports = router; 