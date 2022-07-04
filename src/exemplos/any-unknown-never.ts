let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
let stringTest :string = 'verificar';
stringTest = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';

let stringText2 :string ='agora vai';


if(typeof unknowValor === 'string'){
    stringText2 = unknowValor;
}

function jogarErro(erro: string, codigo :number): never{
    throw {erro:erro, code:codigo}
}
jogarErro('deu erro', 500);