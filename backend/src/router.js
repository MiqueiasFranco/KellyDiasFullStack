const express = require('express')
const router = express.Router()
const clientController = require('./controllers/clientController')
const clientMiddlewares = require('./middlewares/clientMiddlewares')


router.get('/clients', clientController.getALL)
router.post('/clients', clientMiddlewares.validateFieldName, clientController.createClient)
router.delete('/clients/:id', clientController.deleteClient)
router.put('/clients/:id', clientMiddlewares.validateFieldService, clientMiddlewares.validateFieldName, clientController.updatedClient)

module.exports = router