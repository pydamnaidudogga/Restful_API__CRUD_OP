
const Items = require('../../models/ItemsSchema');
const {validationResult} = require('express-validator');


// The below controller is for get items
module.exports.getIteams = async (req, res, next) => {

    try {
        // finding the items from the databse
        const items = await Items.find({});
        // if the items are not found in the database then show the below error
        if(!items){
            const error = new Error('Items not found');
           next(error);

       }else{
           res.status(200).json(items);
       }
        
        
    } catch (error) {
        
        next(error);       
        
    }

}


// The below controller is for geting single item from the database using id

module.exports.getIteam = async (req, res,next) => {

   

    try {
       
        const item = await Items.findById(req.params.id);
        if(!item){
             const error = new Error('Item not found');
            next(error);

        }else{
            res.status(200).json(item);
        }
        
    } catch (error) {
        error.message='Item not found';
        next(error);
       
        
        
    }

}


// The below controller is for adding item into the database
module.exports.addIteam = async (req, res,next) => {

    try {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
           
            res.status(400).json({ errors: errors.array() });
        }else{
           const item = new Items(req.body);
           await item.save();
           res.status(200).json({
               message:'Item added successful',
               item
    
            })
        }

        
    } catch (error) {
        error.message='product not added'
        next(error);

        
    }


    
}



// The below controller is for updating the item in the database
module.exports.updateIteam = async (req, res, next) => {

    try {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
           
            res.status(400).json({ errors: errors.array() });
        }else{
           const item = await Items.findByIdAndUpdate(req.params.id,req.body,{ new: true });
           if(!item){
               const error = new Error('Item not found');
               next(error);

            }else{

                res.status(200).json({
                    message:'Item updated successful',
                    item
         
                 });
               
            }
           
            
        }

        
        
    } catch (error) {
        next(error);
        
    }


    
}


// The below controller is for delete the item in the database
module.exports.deleteIteam = async (req, res, next) => {

    try {
        const item = await Items.findByIdAndDelete(req.params.id);
        if(!item){
            const error = new Error('Item not found');
            next(error);

         }else{

             res.status(200).json({
                 message:'Item deleted successful',
                 item
      
              });
            
         }
        
        
    } catch (error) {
        next(error);
        
    }


    
}