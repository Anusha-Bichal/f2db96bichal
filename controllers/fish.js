var fish = require('../models/fish'); 
 
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

// for a specific Costume.
exports.fish_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await fish.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};

 
// Handle Costume delete form on DELETE. 
exports.fish_delete = async function(req, res) { 
    try{ 
        thefishs = await fish.find(); 
        res.send(thefishs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// List of all fish 
// Handle fish update form on PUT. 
exports.fish_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await fish.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.fish_name)  toUpdate.fish_name = req.body.fish_name; 
        if(req.body.fish_type) toUpdate.fish_type = req.body.fish_type; 
        if(req.body.fish_size) toUpdate.fish_size = req.body.fish_size; 
        let result = await toUpdate.save();
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
};
// VIEWS 
// Handle a show all view 
exports.fish_view_all_Page = async function(req, res) { 
    try{ 
        thefishs = await fish.find(); 
        res.render('fishs', { title: 'fish Search Results', results: thefishs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
}

// Handle Costume create on POST. 
exports.fish_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new fish(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.fish_name = req.body.fish_name; 
    document.fish_type = req.body.fish_type; 
    document.fish_size = req.body.fish_size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};