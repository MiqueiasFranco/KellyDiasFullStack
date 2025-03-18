const nome = document.querySelector('.nome')
const celular = document.querySelector('.celular')
const data = document.getElementById('data')
const cardItem = document.querySelector('.card-item')
const form = document.querySelector('form')



const mensagemElemento = document.createElement('div')


const dataFormatada = (data) =>{
    const novaData = new Date(data).toLocaleDateString('pt-br', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    return novaData
}


const fetchClients = async (data, servico) => {
    const response = await fetch('https://https://kelly-dias-full-stack.vercel.app/clients')
    const clients = await response.json()
    const dateUTC = new Date(Date.now())
    const dataUsuarioUTC = new Date(data)
    const datasAgendadas = []
    
    clients.forEach((client) => {
        datasAgendadas.push(client.horario)
    });

    if (datasAgendadas.includes(data)) {
        alert('horario indisponivel')
    }

    else if(dataUsuarioUTC <= dateUTC){
        alert('Escolha uma data válida!')
    }

    else {
        const cliente = { nome: nome.value, celular: celular.value, horario: data, servico: servico }
        await fetch('https:https://kelly-dias-full-stack.vercel.app/clients', {
            method:'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(cliente),
        })
        window.location.reload()
    }
    
}


const cadastrarCliente = async(servico, event)=>{
    event.preventDefault()
    if (nome.value == '') {
        alert('Campo "Nome" não pode estar vazio ')
    }

    else if(celular.value == ''){
        alert('Campo "celular" não pode estar vazio')
    }
    else if(data.value == ''){
        alert('Campo "data" não pode estar vazio')
    }
    else {
        fetchClients(data.value, servico)
    }

    
    
    form.append(mensagemElemento)

}


cardItem.addEventListener('click',function(servico){ cadastrarCliente(servico.target.id, event)})





