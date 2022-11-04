const form =  document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []
console.log(itens)

itens.forEach((elemento)=>{
  criaElemento(elemento)
})

form.addEventListener("submit", (evento)=>{

  const nome = evento.target.elements['nome']
  const quantidade = evento.target.elements['quantidade']

  evento.preventDefault()

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value
  }

  criaElemento(itemAtual)

  itens.push(itemAtual)

  localStorage.setItem("itens", JSON.stringify(itens))

  nome.value = ''
  quantidade.value = ''

  
})

function criaElemento(item){
  //<li class="item"><strong>1</strong>Maçã</li>
  const novoItem = document.createElement('li')
  novoItem.classList.add('item')

  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = item.quantidade
  //colocar strong dentro de li
  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += item.nome

  //pegando ul e criando um novo Item
  lista.appendChild(novoItem)

  console.log(novoItem)


}


//Primeiro eu busquei o novoItem pelo Id e atribuí a uma variavel Form
//peguei a variavel form e usei o addEventlistener, quando acontecer o submit quero criarElemento entao chamei a funçao
//entao usei o criaElemento, li para criar a lista de novos itens e o strong pra criar o numero dos itens. Entoa preciso usar o appendChild pra colocar um dentro do outro e depois juntei tudo dentro de List
//Eu criei o itemAtual para colocar os dois objetos que eu pretendo enviar para o localStorage usando o setItem, fiz o push dele 
//eu quero colocar um array de itens no localStorage entao pra isso vou criar um array
//eu criei o getItem para consultar o meu localStorage e ver se existe itens la dentro se for false quero que ele crie um array vazio
//usar o forEach em itens para percorrer o elemento que esta sendo




















// const form = document.getElementById("novoItem")
// const lista = document.getElementById('lista')
// const itens = []

// form.addEventListener("submit", (evento)=>{
//   evento.preventDefault()

//   const nome = evento.target.elements['nome']
//   const quantidade = evento.target.elements['quantidade']

//   criaElemento(nome.value, quantidade.value)

//   nome.value = ''
//   quantidade.value = ''
// })

// function criaElemento(nome, quantidade){
//   console.log(nome)
//   console.log(quantidade)
//<li class="item"><strong>1</strong>Maçã</li>
//   const novoItem = document.createElement('li')
//   novoItem.classList.add("item")

//   const numeroItem = document.createElement('strong')
//   numeroItem.innerHTML = quantidade
//   console.log(numeroItem)
//   //colocar o strong dentro do li usando o appendChild
//   novoItem.appendChild(numeroItem)
//   //acrescentar o nome
//   novoItem.innerHTML += nome

//   lista.appendChild(novoItem)

//   //criei essa "biblioteca" para nao sobre-escrever na hora do submit
//   const itemAtual = {
//     "nome": nome,
//     "quantidade": quantidade
//   }

//   itens.push(itemAtual)

//   localStorage.setItem("item", JSON.stringify(itens))
// }
