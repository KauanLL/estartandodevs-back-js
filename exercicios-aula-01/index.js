// //Lista de algoritmos
// //Exercicio 01

// const nome = 'Sora';
// const age = 16;
// const over18 = age > 18;

// if (over18) {
//     console.log('Olá', nome, 'você tem', age, 'anos', 'e já pode beber'); //Testar console.log com ${}
// } else {
//     console.log('Olá', nome, 'você tem', age, 'anos', 'e não pode beber');
// }

// //Exercicio 02

// const nome = 'Alan Araujo';
// const salario = 9000;
// const declarar = salario * 1.18 > 3000;

// if (declarar) {
//     console.log('Olá ' + nome + ' seu salario de R$' + salario + ' foi para R$' + salario * 1.18 + ' e você tem que declarar o imposto');
// } else {
//     console.log('Olá ' + nome + ' seu salario de R$' + salario + ' foi para R$' + salario * 1.18 + ' e você não precisa declarar o imposto');
// }

//Exercicio 03

const nome = 'Kauan'; //tentar com input
const nota1 = 10;
const nota2 = 10;
const nota3 = 10;
const media = (nota1 + nota2 + nota3) / 3;
let aprovacao = '' //const não funciona

if (media >= 8) { //if altera o valor da var
    aprovacao = 'Aprovado'; 
} else {
    aprovacao = 'Reprovado';
}

console.log(`O aluno ${nome} teve a media de ${media} e foi ${aprovacao}`);

