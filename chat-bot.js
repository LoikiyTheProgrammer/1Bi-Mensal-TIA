import { palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, palavrasPalavrao, palavrasPapoFurado, mostProbablyQuestion } from './can-i-answer.js'

console.log("Olá, sou um chatbot que responde perguntas sobre o Bento Quirino!")
let pergunta = "Qual o nome do fundador da instituição?"
pergunta = pergunta.toLowerCase()
pergunta = pergunta.split(' ')

const bancos = [
    palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, palavrasPalavrao, palavrasPapoFurado,
]

for (let i = 0; i < pergunta.length; i++) {
    for (let j = 0; j < bancos.length; j++) {
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}

console.log(mostProbablyQuestion(pergunta))
