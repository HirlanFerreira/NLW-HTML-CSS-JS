const perguntas = [
  {
    pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    resposta: [
      "var",
      "let",
      "const"
    ],
    correta: 2
  },
  {
    pergunta: "Qual desses é um tipo de dado primitivo em JavaScript?",
    resposta: [
      "Array",
      "Object",
      "Number"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a sintaxe correta para adicionar um comentário de linha única em JavaScript?",
    resposta: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */"
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
    resposta: [
      "log()",
      "print()",
      "console.log()"
    ],
    correta: 2
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    resposta: [
      "Verifica se dois valores são iguais em valor, mas não em tipo",
      "Verifica se dois valores são iguais em tipo, mas não em valor",
      "Verifica se dois valores são iguais em valor e tipo"
    ],
    correta: 2
  },
  {
    pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
    resposta: [
      "parseInt()",
      "toString()",
      "parseFloat()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
    resposta: [
      "+",
      "&",
      "*"
    ],
    correta: 0
  },
  {
    pergunta: "Qual desses não é um loop em JavaScript?",
    resposta: [
      "for",
      "foreach",
      "while"
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    resposta: [
      "pop()",
      "shift()",
      "splice()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o valor de 'typeof null' em JavaScript?",
    resposta: [
      "'null'",
      "'object'",
      "'undefined'"
    ],
    correta: 1
  }
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")


// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt= quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    quizItem.querySelector("dl").appendChild(dt)
  
  }

  quiz.appendChild(quizItem)
}