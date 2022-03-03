import { Jogar  } from "./jogo.js";

const btnJogar = document.querySelector("body")
btnJogar.addEventListener('submit', Jogar.declarandoJogador.bind(Jogar))

const btnJogada = document.querySelector(".section-jogo")
btnJogada.addEventListener('click', Jogar.jogadorEscolheJogada.bind(Jogar))

const btnConfirmarJogada = document.querySelector(".section-jogada")
btnConfirmarJogada.addEventListener('click', Jogar.confirmarJogada.bind(Jogar))

const btnAbrirModal = document.getElementById('abrir-modal')
btnAbrirModal.addEventListener('click', () => {
    const modal = document.getElementById('modalId')

    modal.style.display = 'Block'
})

const btnFecharModal = document.getElementById('fechar-modal')
btnFecharModal.addEventListener('click', () => {
    const modal = document.getElementById('modalId')

    modal.style.display = 'none'
})
