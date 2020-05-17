const txt_non_structered = 'meu cpf é 123.456.569-22';

//regex

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(txt_non_structered.match(regex))

//desafio prova 

let partes = ['ombros', 'joelhos']; 
let letra = ['cabeça', ...partes, 'e', 'dedos'];

console.log(letra);