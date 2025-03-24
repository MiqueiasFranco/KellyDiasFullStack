const connection = require('./connection')

const getALL = async () =>{
    const [servico] = await connection.execute('SELECT * FROM servicos')
    return servico
}

const getForId = async(id)=>{
    const [servico] = await connection.execute(`SELECT nome, duracao, valor  FROM servicos  WHERE id=${id}`)
    return servico

}

const createService = async (servico) => {
    const {nome, duracao, valor} = servico
    const query = 'INSERT INTO servicos (nome, duracao, valor) VALUES (?, ?, ?)'
    const [createdService] = await connection.execute(query, [nome, duracao, valor])
    return {insertId: createdService.insertId}
}

const deleteService = async(id)=>{
    const removedService = await connection.execute('DELETE FROM servicos WHERE id =?',[id])
    return removedService
}
const updatedService = async(id, servico)=> {
    const query = 'UPDATE servicos SET nome =?, duracao =?, valor =?, celular=? WHERE id =?'
    const {nome, duracao, valor} = servico
    const [updatedService]= await connection.execute(query, [nome,duracao, valor,id])
    return updatedService
}



module.exports = {
    getALL,
    getForId,
    createService,
    deleteService,
    updatedService
}