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
    document.write(`${nomeAluno} está estudando <br>`);
}
  
const aluno = "Vinicius";
alunoEstudando(aluno);

const buscarAluno = escola.aluno.find(function(aluno) {
    return aluno === "Stephanie";
});

console.log(`O aluno(a) ${buscarAluno} foi encontrado!`);
document.write(`O aluno(a) ${buscarAluno} foi encontrado! <br>`);