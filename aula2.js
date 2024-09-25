var prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome?")
let idade = prompt ('Qual a sua idade?')

console.log(`${idade} anos`)

console.log(`Olá,${nome}! Boas vindas a Faculdade Senac`)

let ajuda = prompt("Como posso te ajudar?")

console.log(`${ajuda}`)

let PáginaDoAluno = prompt("Para acessar a Página do Aluno, você precisa inserir seu login e senha no portal senac22")

console.log(`${PáginaDoAluno}`)