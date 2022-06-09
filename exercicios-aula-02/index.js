// Lista de Algoritmos 02
// Exercicio 01 - Inverter String

function inverter (palavra) {
    let resultado = '';
    let dividir = palavra.split("");  // Tentei usar apenas o palavra.split("") porem ele não dividiu a string
   
    //for (i = 0; i < palavra.length; i++){
    for (i = palavra.length; i > 0; i--) {  //teste com i--
        resultado += dividir.pop();  //pop retorna undefined caso o array esteja vazio, while True funcionaria ?; if dividir.pop() === undefined; quebre o loop
    }
    
    return resultado.toLowerCase()  //Resultado desejado era 'Evlas', trocando a letra maiuscula, porém não achei um metodo para isso, TESTAR CAP
}


//let palavra = 'Salve'; //Pode ter o mesmo nome do parametro ? 
//console.log(inverter(palavra);)


//Exercicio 02 - Contar as vogais


function contarNumeroVogais (palavra) {  //Queria um jeito sem tanta comparação 
    let contador = 0
    for (i = 0; i < palavra.length; i++){
        if (palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u' ){ 
            contador++
        }
    }
    return contador
}


function testeContar (palavra) {  //Mais comparações que o primeiro
    contteste = 0
    teste = 'aeiou'
    for (i = 0; i < palavra.length; i++){ 
        for (c = 0; c < teste.length; c++){
            if (teste[c] === palavra[i]){
                contteste++
            }
        }
    }
    return console.log(contteste)
}


// const palavra = 'Salveeeee'
// console.log(contarNumeroVogais(palavra))
// testeContar(palavra)


// Exercicio 03 - Fazer Relatorio


function fazerRelatorio (palavra) {
    if (typeof palavra !== 'string'){  //tentei palavra !== String e typeof palavra !== String, parece que String não e usado para comparação, typeof retona uma string com o tipo da var, logo => 'string'
        return console.log(`Oh Cara iii, ${undefined}`)
    } else {
    let objecto = {} //Tentar declarar os 'atributos do objeto' dentro do objeto
    objecto.palabra = palavra;
    objecto.palavraInverso =  inverter(palavra);  //A função inverter tinha console.log e não funcionou, tive que tirar
    objecto.numeroVogais = contarNumeroVogais(palavra);
    return console.log(objecto)
    }
}


palavra = 100
fazerRelatorio(palavra)
