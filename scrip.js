// === Lista de perguntas e alternativas ===
const perguntas = [
    {
        enunciado: "Qual função usamos para imprimir algo no console do navegador?",
        alternativas: [
            { texto: "console.log()", correta: true },
            { texto: "alert()", correta: false },
            { texto: "print()", correta: false }
        ]
    },
    {
        enunciado: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
        alternativas: [
            { texto: "//", correta: true },
            { texto: "/* */", correta: false },
            { texto: "#", correta: false }
        ]
    },
    {
        enunciado: "Qual método transforma uma string em letras maiúsculas?",
        alternativas: [
            { texto: "toUpperCase()", correta: true },
            { texto: "toLowerCase()", correta: false },
            { texto: "uppercase()", correta: false }
        ]
    },
    {
        enunciado: "Qual tipo de dado representa valores verdadeiros ou falsos?",
        alternativas: [
            { texto: "Boolean", correta: true },
            { texto: "String", correta: false },
            { texto: "Number", correta: false }
        ]
    },
    {
        enunciado: "Qual operador é usado para comparar valor e tipo?",
        alternativas: [
            { texto: "==", correta: false },
            { texto: "===", correta: true },
            { texto: "!=", correta: false }
        ]
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

// === Mostra a pergunta na tela ===
function mostraPergunta() {
    const pergunta = perguntas[indicePerguntaAtual];
    document.getElementById("pergunta").innerHTML = `<h2>${pergunta.enunciado}</h2>`;
    mostraAlternativas(pergunta.alternativas);
}

// === Mostra as alternativas como botões radio ===
function mostraAlternativas(alternativas) {
    const container = document.getElementById("alternativas");
    container.innerHTML = "";
    alternativas.forEach((alt, index) => {
        container.innerHTML += `
            <div class="alternativa">
                <label>
                    <input type="radio" name="resposta" value="${index}">
                    ${alt.texto}
                </label>
            </div>
        `;
    });
}

// === Função para enviar a avaliação ===
function enviarAvaliacao() {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (!respostaSelecionada) {
        alert("Por favor, selecione uma alternativa.");
        return;
    }

    const indiceResposta = parseInt(respostaSelecionada.value);
    if (perguntas[indicePerguntaAtual].alternativas[indiceResposta].correta) {
        pontuacao++;
    }

    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostraPergunta();
    } else {
        document.getElementById("pergunta").style.display = "none";
        document.getElementById("alternativas").style.display = "none";
        document.getElementById("resultado").innerHTML = 
            `Você acertou ${pontuacao} de ${perguntas.length} questões! 🎯`;
    }
}

// === Inicializa a primeira pergunta ===
mostraPergunta();