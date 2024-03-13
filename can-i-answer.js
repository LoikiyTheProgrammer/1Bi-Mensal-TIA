export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
}

export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
}

export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
}

export const palavrasPalavrao = {
    probrablyWords: [
    "Caralho", "Porra", "Puta-que-pariu",
    "Merda", "Puta-merda", "Cacete"
    ],
    matched: 0,
}

export const palavrasPapoFurado = {
    probablyWords: [
        "basquete", "triatlo", "ping-pong",
        "futebol", "cinema", "comida",
        "tempo", "clima"
    ],
    matched: 0,
}

function respondePergunta(index) {
    switch (index) {
        case 0:
            return "O fundador da escola Bento Quirino foi o Bento Quirino."
        case 1:
            return "Sim, a escola oferece curso técnico, como: Ti, Games, Farmácia, Medicina, Nutrição, Biotec, Publicidade, entre vários outros."
        case 2:
            return "No site do Bento Quirino: https://www.bentoquirino.com.br/novo/contato/matriculas/"
        case 3:
            return "Não xinga porra!"
        default:
            return "Só sei tirar duvidas sobre o Bento Quirino, se não for isso, tchau"
    }
}

export function mostProbablyQuestion(pergunta) {
    for(let i = 0; i < pergunta.length; i++) {
        if(palavrasPapoFurado.probablyWords.indexOf(pergunta[i]) !== -1) {
            return `Não sei nada sobre ${pergunta[i]}`
        }
    }
    let matches = [
        palavrasEscolaFundador.matched, 
        palavrasCursosTecnicos.matched, 
        palavrasMatricula.matched,
        palavrasPalavrao.matched,
        palavrasPapoFurado.matched,
    ]
    console.log(matches)
    console.log(Math.max(...matches))
    console.log(matches.indexOf(Math.max(...matches)))
    return respondePergunta(matches.indexOf(Math.max(...matches)))
}

// adicionei uma const palavrasPalavrao para caso o usuário faça um pergunta xingando
