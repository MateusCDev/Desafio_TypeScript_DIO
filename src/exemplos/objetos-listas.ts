const pessoa ={
    nome:'Mateus',
    idade: 23,
    profissao: 'desenvolvedor'
}

pessoa.idade = 28;

const andre: {nome:string, idade:number, profissao:string} = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
}

const paula: {nome:string, idade:number, profissao:string} = {
    nome: "João",
    idade: 30,
    profissao: "desenvolvedor"
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedor,
    JogadorDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa : Pessoa ={
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Atriz
}

const maria : Pessoa ={
    nome: 'Maria',
    idade: 23,
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Professora,
    materias: ['Matematica', 'Contabilidade']
}

function  listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item)
    }
}


listar(jessica.materias);