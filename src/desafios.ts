//Desafio 1
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*
//Resposta 1 Typando por inferencia
let funcionario: = {
    codigo: 10,
    nome: 'John'
};
funcionario.codigo = 10;
funcionario.nome = "John";

//Resposta 2 Typando por annotation
let funcionario2:  { codigo: number, nome : string} = {
    codigo: 10,
    nome:'Mateus'
};
funcionario2.codigo = 10;
funcionario2.nome = "Mateus";

// Resposta 3 por Interface
interface Funcionario {
    nome : string,
    codigo : number
}

let colaborador: Funcionario = {
    nome :'Mateus',
    codigo : 23
}
*/
/*
// Desafio 2
// Como podemos melhorar o esse código usando TS? 

//Resposta
interface Pessoas {
    nome: string,
    idade: number,
    profissao: string
}
let pessoa1: Pessoas = {
    nome: 'Mateus',
    idade: 23,
    profissao: 'Desenvolvedor'
};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2: Pessoas = {
    nome: 'Mateus',
    idade: 23,
    profissao: 'Desenvolvedor'
}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 : {nome: string, idade:number | string, profissao:string} ={
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4: {nome : string, idade:number, profissao:string} = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}
*/

/*
//Desafio 3
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

//Resposta
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;



let saldoTotal:number = 0;

function limpaCampoSoma(){
    soma.value = '';
}

function somarAoSaldo(soma: number) {
    saldoTotal += soma
    campoSaldo.innerHTML = saldoTotal.toString();
    limpaCampoSoma();
}

function limparSaldo() {
    saldoTotal = 0
    campoSaldo.innerHTML = saldoTotal.toString();
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
