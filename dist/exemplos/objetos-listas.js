"use strict";
const pessoa = {
    nome: 'Mateus',
    idade: 23,
    profissao: 'desenvolvedor'
};
pessoa.idade = 28;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
};
const paula = {
    nome: "João",
    idade: 30,
    profissao: "desenvolvedor"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Atriz
};
const maria = {
    nome: 'Maria',
    idade: 23,
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Professora,
    materias: ['Matematica', 'Contabilidade']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materias);
