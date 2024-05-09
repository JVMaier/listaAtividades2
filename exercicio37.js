/*
    37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
    o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
    respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
    aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
    e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

const elements = ["a", "b", "c", "d", "e"];

function generateRandomResponses(elements) {
  const responses = [];
  for (let i = 0; i < 20; i++) {
    responses.push(elements[Math.floor(Math.random() * elements.length)]);
  }
  return responses;
}

const templateFixed = generateRandomResponses(elements);
console.log("Gabarito:");
console.log(templateFixed);

function generateRandomR(elements, numStudents) {
  const answersFromStudents = [];
  for (let i = 0; i < numStudents; i++) {
    const studentsAnswers = generateRandomResponses(elements);
    answersFromStudents.push(studentsAnswers);
  }
  return answersFromStudents;
}

const answersFromStudents = generateRandomR(elements, 50);

function checkAccuracies(templateFixed, studentsAnswers) {
  let hits = 0;
  for (let i = 0; i < templateFixed.length; i++) {
    if (templateFixed[i] === studentsAnswers[i]) {
      hits++;
    }
  }
  return hits;
}

for (let i = 0; i < answersFromStudents.length; i++) {
  const numHits = checkAccuracies(templateFixed, answersFromStudents[i]);
  console.log(`Aluno ${i + 1}: ${numHits} acertos`);

  if (numHits >= 12) {
    console.log("APROVADO!");
    console.log("-------------------");
  } else {
    console.log("REPROVADO!");
    console.log("-------------------");
  }
}
