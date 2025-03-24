const express = require('express')
const router = express.Router()
const clientController = require('./controllers/clientController')
const clientMiddlewares = require('./middlewares/clientMiddlewares')

const serviceController = require('./controllers/servicoController')

/* routers clients */
router.get('/clients', clientController.getALL)
router.get('/clients/:id', clientController.getForId)
router.post('/clients', clientMiddlewares.validateFieldName, clientController.createClient)
router.delete('/clients/:id', clientController.deleteClient)
router.put('/clients/:id', clientMiddlewares.validateFieldService, clientMiddlewares.validateFieldName, clientController.updatedClient)

/* routers services */

router.get('/servicos', serviceController.getALL)
router.get('/servicos/:id', serviceController.getForId)
router.post('/servicos', clientMiddlewares.validateFieldName, serviceController.createService)
router.delete('/servicos/:id', serviceController.deleteService)
router.put('/servicos/:id', clientMiddlewares.validateFieldService, clientMiddlewares.validateFieldName, serviceController.updatedService)


module.exports = router