const people = {
  nome:'Gabriel Rodrigues',
  sobrenome: 'Perez',
  idade:21,
  profissao:'Analista de finanças junior'
}

console.log(people)
//sem destructering 
// let nome = people.nome;
// let sob = people.sobrenome;
// let idade = people.idade;
// let prof = people.profissao;

// com destructering

let {nome, sobrenome, idade, profissao } = people;

console.log(nome, idade , profissao)