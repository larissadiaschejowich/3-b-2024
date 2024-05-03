const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
console.log(botoes)
for (let i=0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
              
        for(let j=0;j<botoes.length;j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
    console.log(i);
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

contadores[0].textContent = calculatempo(tempos[0]);
contadores[1].textContent = calculaTempo(tempos[1]);
contadores[2].textContent = calculaTempo(tempos[2]);
contadores[3].textContent = calculaTempo(tempos[3]);
let tempoAtual = new Date();
 contadores[0].textContent = tempoObjetivo1 - tempoAtual;
 contadores[1].textContent = tempoObjetivo2 - tempoAtual;
 contadores[2].textContent = tempoObjetivo3 - tempoAtual;
 contadores[3].textContent = tempoObjetivo4 - tempoAtual;

function calculatempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let hora = Math.floor(horas / 24); 

    segundos %= 60;
    minutos %= 60;
    horas %=24;

    return dias + "dias" + hora + "horas" + minutos + "minutos" + segundos + "segundos";
}
