




class Cliente:
    def __init__(self, nome, celular, servico, dia):
        self.nome =  nome
        self.celular = celular
        self.servico =  servico
        self.dia =  dia



nome = input('nome: ')
celular =  input('celular: ')
servico = input('cabelo[0],barba[1], bigode[2]: ')
dia = input('dia: ')
print(nome,celular,servico,dia)


Cliente(nome,celular, servico, dia)
