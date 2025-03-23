const connection = require('./connection')

const getALL = async () =>{
    const [clients] = await connection.execute('SELECT * FROM clients')
    return clients
}

const getForId = async(id)=>{
    const [client] = await connection.execute(`SELECT nome, celular, horario, servico  FROM clients  WHERE id=${id}`)
    return client

}

const createClient = async (client) => {
    const {nome, servico, horario, celular} = client
    const query = 'INSERT INTO clients (nome, celular, horario, servico) VALUES (?, ?, ?, ?)'
    const [createdClient] = await connection.execute(query, [nome, celular , horario, servico])
    return {insertId: createdClient.insertId}
}

const deleteClient = async(id)=>{
    const removedClient = await connection.execute('DELETE FROM clients WHERE id =?',[id])
    return removedClient
}

const updatedClient = async(id, client)=> {
    const query = 'UPDATE clients SET servico =?, horario =?, nome=?, celular=? WHERE id =?'
    const {horario, servico, nome, celular} = client
    const [updatedClient]= await connection.execute(query, [horario, servico, nome, celular, id])
    return updatedClient
}



module.exports = {
    getALL,
    getForId,
    createClient,
    deleteClient,
    updatedClient
}