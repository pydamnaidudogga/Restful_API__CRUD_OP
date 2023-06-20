const { body} = require('express-validator');

// error handling controller
module.exports.errorHandling = (err, req, res, next) => {
    
    let statusCode = err.statusCode || 500; // Default to 500 Internal Server Error
    let errorMessage = err.message || 'Internal Server Error';
  
    // Handle specific error scenarios
   
    if(err.message === 'Item not found') {
        statusCode = 404; // Unauthorized
      errorMessage = 'Item not found';
    }
  
    // Send the error response
    res.status(statusCode).json({ message: errorMessage });


}

// input validation from the request  for adding item
exports.dataValidation = [
    body('itemName').notEmpty().withMessage('itemName name is required'),
    body('brand').notEmpty().withMessage('brand name is required'),
    body('color').notEmpty().withMessage('color is required'),
    body('discription').notEmpty().withMessage('discription is required'),
    body('price').notEmpty().withMessage('price is required')
]

// input validation from the request for updating the item
exports.updateDataValidation = [
    body('itemName').optional().notEmpty().withMessage('itemName name is required'),
    body('brand').optional().notEmpty().withMessage('brand name is required'),
    body('color').optional().notEmpty().withMessage('color is required'),
    body('discription').optional().notEmpty().withMessage('discription is required'),
    body('price').optional().notEmpty().withMessage('price is required')

]

