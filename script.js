//-------------------EXERCÍCO 1-------------------//

const escola = {
    curso: ["ADS", "Data Science", "ADM"],
    aluno: ["Lucas", "Stephanie", "Leticia"],
    professor: ["Wellington", "Allen", "Joseffe"],
    turma: ["1A", "1B", "1C"],
    periodo: ["Matutino", "Vespertino", "Noturno"]
  };

function alunoEstudando(nomeAluno) {
    console.log(`${nomeAluno} está estudando`);
    document.write(`<br>${nomeAluno} está estudando <br>`);
}
  
const aluno = "Vinicius";
alunoEstudando(aluno);

const buscarAluno = escola.aluno.find(function(aluno) {
    return aluno === "Stephanie";
});

console.log(`O aluno(a) ${buscarAluno} foi encontrado!`);
document.write(`O aluno(a) ${buscarAluno} foi encontrado! <br><br>`);

//-------------------EXERCÍCO 2-------------------//

const funcionarios = [
    {
        nome: "Priscila",
        idade: 28,
        sexo: "Feminino",
        cargo: "Pleno",
        salario: 8300,
        descontos: 1200,
        dataAdmissao: 2007,
        dataDemissao: 2019
    },
    {
        nome: "Weslley",
        idade: 35,
        sexo: "Masculino",
        cargo: "Sênior",
        salario: 14000,
        descontos: 3500,
        dataAdmissao: 2012,
        dataDemissao: 2021
    },
    {
        nome: "Patricia",
        idade: 23,
        sexo: "Feminino",
        cargo: "Júnior",
        salario: 3700,
        descontos: 1000,
        dataAdmissao: 2003,
        dataDemissao: 2017
    }
]

// a) Fazer o filter de funcionários que tiveram data de admissão entre 2000 à 2010

const admissao = funcionarios.filter(funcionario => (
    funcionario.dataAdmissao >= 2000 && funcionario.dataAdmissao <= 2010));

    console.log(admissao);
    document.write(`Funcionários contratados entre 2000 e 2010: <br>`);

for (let i = 0; i < admissao.length; i++) {
    document.write(`Nome: ${admissao[i].nome} | Idade: ${admissao[i].idade} | Sexo: ${admissao[i].sexo} <br>`);
}

// b) Fazer um filter de funcionários que foram demitidos depois de 2018

const demissao = funcionarios.filter(funcionario =>(
    funcionario.dataDemissao > 2018));

    console.log(demissao);
    document.write(`<br>Funcionários Demitidos após 2018: <br>`);

    for (let i = 0; i < demissao.length; i++) {
        document.write(`Nome: ${demissao[i].nome} | Idade: ${demissao[i].idade} | Sexo: ${demissao[i].sexo} <br>`);
    }

// c) Fazer um map de funcionários e trazer o nome, salário, desconto 

document.write(`<br>Map de Funcionários<br>`);

  const mapFuncionarios = funcionarios.map(funcionario =>
    `${funcionario.nome}` + ' tem ' + `salário de R$ ${funcionario.salario}` + ' com desconto de R$' +` ${funcionario.descontos} <br>`);

    console.log(mapFuncionarios);
    document.write(mapFuncionarios);

// d) Criar um Reduce para somar o valor total dos descontos

const totalDescontos = funcionarios.reduce(function(total, funcionario) {
    return total + funcionario.descontos;
  }, 0);
  
  console.log("Total de descontos: " + totalDescontos);
  document.write(`<br>Total de descontos: ${totalDescontos} <br>`);

//-------------------EXERCÍCO 3-------------------//

// Tradicional
function soma1(a, b, c){
    return (a + b) / c;
}
console.log(soma1(8, 4, 2));

//Arrow Function
const soma2 = (a, b, c) => {
    return (a + b) / c; 
}
console.log(soma2(5, 4, 2));

//-------------------EXERCÍCO 4-------------------//

//Crie uma função tradicional que conte os cliques na página e faça o mesmo usando Arrow function 
const btn1 = document.getElementById("btn1");
const clicks1 = document.getElementById("clicks1");

const btn2 = document.getElementById("btn2");
const clicks2 = document.getElementById("clicks2");

let resultado1 = 0;
let resultado2 = 0;

//Tradicional
function contarClicks() {
    resultado1++;
    clicks1.textContent = `${resultado1} click`;
 }

btn1.addEventListener("click", contarClicks);

//Arrow Function
const contarCliques = () => {
    resultado2++;
    clicks2.textContent = `${resultado2} click`;
}

btn2.addEventListener("click", contarCliques);

//-------------------EXERCÍCO 5-------------------//

// Criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6. 

const notas = (a, b, c, d, e, f, g) => {
    return (a + b + c + d + e + f + g) / 7;
}

const media = notas(10, 5, 9, 8, 10, 7, 8);
console.log(media);

if (media >= 6) {
    console.log('Aluno aprovado!');
}

else {
    console.log('Aluno Reprovado!');
}

//-------------------EXERCÍCO 6-------------------//

// Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou se houve falha de autenticação.

function Login() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  
    if (usuario === 'admin' && senha === '1234' ) {
        alert("Seja Bem-vindo!");
    } 
    
    else {
        alert("Usuário ou senha incorretos.");
    }
}

//-------------------EXERCÍCO 7-------------------//

const idade = prompt("Digite sua idade: ");

if (idade <= 12) {
  console.log("Você é uma criança.");
  alert("Você é uma criança.");
} 

else if (idade <= 18) {
  console.log("Você é um adolescente.");
  alert("Você é um adolescente.");
} 

else if (idade <= 60) {
  console.log("Você é um adulto.");
  alert("Você é um adulto.");
} 

else {
  console.log("Você é um idoso.");
  alert("Você é um idoso.");
}

//-------------------EXERCÍCO 8-------------------//

// % pode ser utilizado para representar o resto de uma divisão.

const calcularResto = 23 % 2;
console.log(calcularResto);

//E através do resto da divisão, podemos criar um código que informar se um número é par ou impar.

const valor = 16;

if (valor % 2 === 0) {
    console.log(`${valor} é um número par!`);
} 

else {
    console.log(`${valor} é um número impar!`);
}