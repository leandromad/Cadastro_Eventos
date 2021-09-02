//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//
//Lista de eventos existentes
var Evento1 = new Object()
Evento1.palestrante = 'Jefferson'
Evento1.participantes = ['Luan', 'Tiago', 'Leonardo']
Evento1.data = '10/10/2021'
//
var Evento2 = new Object()
Evento2.palestrante = 'Luiz'
Evento2.participantes = ['Leandro', 'Isabele', 'Luciano', 'Matheus', 'Lucas']
Evento2.data = '15/10/2021'
//
//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//

// Declara a idade do usuário
let idade = 25

// Verifica se usuário é maior de idade
if (idade < 18) {
  console.log('Menores de 18 anos não podem se cadastrar no evento!')
  return 0
} else {
  console.log('Idade válida!')
}

//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//
// Comparar data solicitada com data atual do sistema e data de eventos
let dataDoEvento = '10/10/2021'
let partesData = dataDoEvento.split('/')
let data = new Date(partesData[2], partesData[1] - 1, partesData[0])

if (data < new Date()) {
  console.log('A data escolhida já passou. Impossível cadastrar!')
  return 0
} else if (dataDoEvento !== Evento1.data && dataDoEvento !== Evento2.data) {
  console.log('Data inválida ou inexistente. Impossível cadastrar!')
  return 0
} else {
  console.log('A data é valida!')
}

// Declara o nome do participante
let nome = 'Gilberto'

//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//
// Verifica a data para cadastrar participante e apresentar palestrante e participantes
// Verifica a quantidade de participantes no evento
if (dataDoEvento == Evento1.data && Evento1.participantes.length < 5) {
  Evento1.participantes.push(nome)
  console.log('O nome do palestrante é: ' + Evento1.palestrante)
  console.log(
    'Os participantes do evento são: ' + Evento1.participantes.join(', ')
  )
  console.log('A data do evento é: ' + Evento1.data)
} else if (Evento1.participantes.length >= 5) {
  console.log('Limite de participantes atingido')
  return 0
} else if (dataDoEvento == Evento2.data && Evento2.participantes.length < 5) {
  Evento2.participantes.push(nome)
  console.log('O nome do palestrante é: ' + Evento2.palestrante)
  console.log(
    'Os participantes do evento são: ' + Evento2.participantes.join(', ')
  )
  console.log('A data do evento é: ' + Evento2.data)
} else if (Evento2.participantes.length >= 5) {
  console.log('Limite de participantes atingido')
  return 0
} else {
  return 0
}
//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//%//
