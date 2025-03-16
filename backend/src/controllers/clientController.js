const clientModel = require('../modules/clientModules')

const getALL = async (_request, response)=>{
    const clients =await clientModel.getALL()
    return response.status(200).json(clients)
}

const createClient = async (request, response)=>{
    const createClient =await clientModel.createClient(request.body)
    return response.status(201).json(createClient)
}

const deleteClient = async (request, response)=>{
    const {id} = request.params
    await clientModel.deleteClient(id)
    return response.status(204).json()
}

const updatedClient = async (request, response)=>{
    const {id} = request.params
    await clientModel.updatedClient(id, request.body)
    return response.status(204).json()
}

module.exports = {
    getALL,
    createClient,
    deleteClient,
    updatedClient,
}

