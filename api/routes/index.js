const express = require('express');
const router = express.Router();
const iteamsController = require('../controllers/iteamsController');
const routeErrorHandler = require('../controllers/routingErrors');
const dataValidation = require('../../middlewares/errorHandling');


// The below route is used to get the all items in the data base
router.get('/api/items',iteamsController.getIteams);
// the below route is used to get the specific item by using id
router.get('/api/items/:id',iteamsController.getIteam);
// the below route is used to create a item in the database
router.post('/api/items',dataValidation.dataValidation,iteamsController.addIteam);
// the below route is used to update the item
router.put('/api/items/:id',dataValidation.updateDataValidation,iteamsController.updateIteam);
// the blow route is use to delete the item from the database using id
router.delete('/api/items/:id',iteamsController.deleteIteam);


// Invalid route handlers
router.get('*',routeErrorHandler.error);
router.post('*',routeErrorHandler.error);
router.put('*',routeErrorHandler.error);
router.delete('*',routeErrorHandler.error);



module.exports = router;