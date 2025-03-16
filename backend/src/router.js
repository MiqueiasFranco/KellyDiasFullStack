const express = require('express')
const router = express.Router()
const clientController = require('./controllers/clientController')
const clientMiddlewares = require('./middlewares/clientMiddlewares')


router.get('/', clientController.getALL)
router.post('/', clientMiddlewares.validateFieldName, clientController.createClient)
router.delete('/:id', clientController.deleteClient)
router.put('/:id', clientMiddlewares.validateFieldService, clientMiddlewares.validateFieldName, clientController.updatedClient)

module.exports = router