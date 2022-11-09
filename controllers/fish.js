var fish = require('../models/fish'); 
 
// List of all Costumes 
exports.fish_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: fish list'); 
}; 
 
// for a specific Costume. 
exports.fish_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: fish detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.fish_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: fish create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.fish_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: fish delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.fish_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: fish update PUT' + req.params.id); 
};


// List of all Costumes 
exports.fish_list = async function(req, res) { 
    try{ 
        thefishs = await fish.find(); 
        res.send(thefishs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 