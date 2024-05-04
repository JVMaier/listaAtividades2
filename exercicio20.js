/*
    20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    Matrícula:
    Nome:
    Salário bruto:
    Dedução INSS:
    Salário líquido:
    (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
    INSS).
*/
const funcionarios = [
    { matricula: 1, nome: "João", salarioBruto: 3000 },
    { matricula: 2, nome: "Maria", salarioBruto: 4000 },
    { matricula: 3, nome: "Pedro", salarioBruto: 2500 },
    { matricula: 4, nome: "Leo", salarioBruto: 1500 },
];

const INSS_DISCOUNT = {
    low: 0.08,
    medium: 0.09,
    high: 0.12
};

function calculateDiscount(salarioBruto){
    if (salarioBruto <= 1500) {
        return salarioBruto * INSS_DISCOUNT.low;
    } else if (salarioBruto <= 4000) {
        return salarioBruto * INSS_DISCOUNT.medium;
    } else {
        return salarioBruto * INSS_DISCOUNT.high; 
    }
}

function generatePay(funcionario) {
    const inssDiscount = calculateDiscount(funcionario.salarioBruto);
    const netSalary = funcionario.salarioBruto - inssDiscount;

    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salarioBruto);
    console.log("Dedução INSS:", inssDiscount);
    console.log("Salário líquido:", netSalary);
    console.log("---------------------------");
}

funcionarios.forEach(generatePay);
