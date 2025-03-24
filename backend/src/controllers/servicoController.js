const serviceModel = require('../modules/servicoModules')

const getALL = async (_request, response)=>{
    const services =await serviceModel.getALL()
    return response.status(200).json(services)
}
const getForId = async (request, response)=>{
    const {id} = request.params
    const service =await serviceModel.getForId(id)
    return response.status(200).json(service)
}

const createService = async (request, response)=>{
    const createdService =await serviceModel.createService(request.body)
    return response.status(201).json(createdService)
}

const deleteService = async (request, response)=>{
    const {id} = request.params
    await serviceModel.deleteService(id)
    return response.status(204).json()
}

const updatedService = async (request, response)=>{
    const {id} = request.params
    await serviceModel.updatedService(id, request.body)
    return response.status(204).json()
}

module.exports = {
    getALL,
    getForId,
    createService,
    deleteService,
    updatedService,
}

