
// This is for invalid route handler
module.exports.error= (req,res)=>{
    res.status(404).json({message:'Invalid route'});

}