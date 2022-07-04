"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknowValor;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';
let stringText2 = 'agora vai';
if (typeof unknowValor === 'string') {
    stringText2 = unknowValor;
}
function jogarErro(erro, codigo) {
    throw { erro: erro, code: codigo };
}
jogarErro('deu erro', 500);
