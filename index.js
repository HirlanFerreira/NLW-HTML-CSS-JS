const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var x;",
      "let x;",
      "const x;"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função que permite exibir uma mensagem em uma caixa de diálogo?",
    respostas: [
      "console.log()",
      "alert()",
      "prompt()"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
    respostas: [
      "+",
      "-",
      "*"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método que retorna o número de elementos em um array?",
    respostas: [
      "length()",
      "count()",
      "size()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a palavra-chave usada para iniciar um loop em JavaScript?",
    respostas: [
      "for",
      "while",
      "loop"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o tipo de dado que representa uma lista ordenada de elementos?",
    respostas: [
      "Array",
      "Object",
      "String"
    ],
    correta: 0
  },
  {
    pergunta: "Como se chama a estrutura de controle que permite executar um bloco de código se uma condição for verdadeira?",
    respostas: [
      "if",
      "else",
      "switch"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método usado para remover o último elemento de um array?",
    respostas: [
      "pop()",
      "shift()",
      "splice()"
    ],
    correta: 0
  },
  {
    pergunta: "Como se declara uma função em JavaScript?",
    respostas: [
      "function myFunction()",
      "myFunction = function()",
      "const myFunction = () =>"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de atribuição que adiciona o valor à variável e atribui o resultado?",
    respostas: [
      "+=",
      "-=",
      "*="
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


//loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    quizItem.querySelector('dl').appendChild(dt)
  }
    quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}