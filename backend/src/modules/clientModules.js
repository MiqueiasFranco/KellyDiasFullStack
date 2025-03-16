const connection = require('./connection')

const getALL = async () =>{
    const [clients] = await connection.execute('SELECT * FROM clients')
    return clients
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
    const query = 'UPDATE clients SET servico =?, horario =? WHERE id =?'
    const {horario, servico} = client
    const [updatedClient]= await connection.execute(query, [horario, servico, id])
    return updatedClient
}



module.exports = {
    getALL,
    createClient,
    deleteClient,
    updatedClient
}