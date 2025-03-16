const validateFieldName = (request, response, next)=>{
    const {body} = request

    if (body.nome == undefined){
        return response.status(400).json({message: 'the filed "nome" is required'})
    }
    if (body.nome == ''){
        return response.status(400).json({message: 'the filed cannot be empty'})

    }
    next()

}
const validateFieldService = (request, response, next)=>{
    const {body} = request

    if (body.servico == undefined){
        return response.status(400).json({message: 'the filed "servico" is required'})
    }
    if (body.servico == ''){
        return response.status(400).json({message: 'the filed cannot be empty'})

    }
    next()

}

module.exports = {
    validateFieldName,
    validateFieldService,
}