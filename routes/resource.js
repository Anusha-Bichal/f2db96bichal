var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var fish_controller = require('../controllers/fish'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/fish', fish_controller.fish_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/fish/:id', fish_controller.fish_delete); 
 
// PUT request to update Costume. 
router.put('/fish/:id', fish_controller.fish_update_put); 
 
// GET request for one Costume. 
router.get('/fish/:id', fish_controller.fish_detail); 
 
// GET request for list of all Costume items. 
router.get('/fish', fish_controller.fish_list); 
 
module.exports = router; 