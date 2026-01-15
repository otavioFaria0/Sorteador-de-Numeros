// Função para atualizar o valor mínimo do campo "Até o número" com base no valor do campo "De o número"
function atualizandoMin() {
    const InputDe= document.getElementById("de");
    const InputAte= document.getElementById("ate");

    const valorMinimo = Number(InputDe.value);

    if(!isNaN(valorMinimo) && valorMinimo >= 1) {
        InputAte.min = valorMinimo; 
        if (Number(InputAte.value) < valorMinimo) {
            InputAte.value = valorMinimo; 
        }    
    } 
}

// Array para armazenar os números sorteados
let resultados=[]

// Ao apertar o botão "Sortear", chama a função sortear()
function sortear() {
    const quant= document.getElementById("quantidade").value;
    const numInicial= document.getElementById("de").value;
    const numFinal= document.getElementById("ate").value;

    if (numInicial === "" || numFinal === "" || quant === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    let contador = 0;
     while (contador < quant) {
        resultados[contador] = gerarNumerosAleatorios(numInicial, numFinal);
        contador++; 
     }
    // Exibe os resultados no console, mostrando cada elemento da Array "resultados"
     let contadorResultados = 0;
    while (contadorResultados < resultados.length) {
        console.log(resultados[contadorResultados]);
         contadorResultados++;
     }
    // Converte todos os elementos da Array em texto, separados por ,
    let textoResultado = "Números sorteados: " + resultados.join(", ");
    // Atualiza o HTML
    document.querySelector("#resultado label").innerText = textoResultado;
    ativarBotaoReiniciar();
}

// Função para reiniciar os campos e o resultado
function reiniciar() {
    limparCampo();
    document.querySelector("#resultado label").innerText = "Nùmeros sorteados: nenhum até agora";
    resultados = [];
    desativarBotaoReiniciar();    
}

// Função para gerar números aleatórios entre min e max, inclusive
function gerarNumerosAleatorios(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
// Função para ativar o botão Reiniciar
function ativarBotaoReiniciar() {
    const botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

// Função para desativar o botão Reiniciar
function desativarBotaoReiniciar() {
    const botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
}

// Função para limpar os campos de input
function limparCampo() {
    document.querySelector("#de").value="";
    document.querySelector("#ate").value="";
    document.querySelector("#quantidade").value="";
}

