import { ControleJogador } from "./jogador.js";
import { options } from "./db.js"

class Jogar {

    static jogadores = []
    static jogadaJogador = ''
    static jogadaComputador = ''
    static sectionJogador = document.getElementById('mostra-jogador')
    static sectionJogada = document.getElementById('mostra-jogada')
    static sectionComputador = document.getElementById('mostra-computador')
    static sectionVencedor = document.getElementById('vencedor')

    static declarandoJogador(event) {
        event.preventDefault()

        const input = event.target;
        const form = {}

        for (let i = 0; i < input.length; i++) {
            const { name, value } = input[i]
            if (name) {
                form[name] = value
            }
        }
            this.sectionJogador.innerHTML = ''
            this.jogadores = ControleJogador.nomeJogador(form)
            const p = document.createElement('p');

            p.innerText = `${form.nome.toUpperCase()} escolha uma opção abaixo `
            this.sectionJogador.appendChild(p)
       
    }

    static jogadorEscolheJogada(event) {
        this.sectionJogada.innerHTML = ''
        if (event.target.name === 'pedra') {
            const p = document.createElement('p');
            p.innerText = `PEDRA`
            this.sectionJogada.appendChild(p)
            this.jogadaJogador = 'pedra'

        }
        if (event.target.name === 'papel') {
            const p = document.createElement('p');
            p.innerText = `PAPEL`
            this.sectionJogada.appendChild(p)
            this.jogadaJogador = 'papel'

        }
        if (event.target.name === 'tesoura') {
            const p = document.createElement('p');
            p.innerText = `TESOURA`
            this.sectionJogada.appendChild(p)
            this.jogadaJogador = 'tesoura'
        }
    }

    static confirmarJogada() {
        if (document.querySelector("#confirmar")) {
            this.computadorEscolheJogada()
        }
        this.jogadorVencedor()
    }

    static computadorEscolheJogada() {
        this.sectionComputador.innerHTML = ''

        const jogadaComputador = Math.floor(Math.random() * options.choices.length)
        const escolha = options.choices[jogadaComputador]

        const p = document.createElement('p');
        if (this.jogadaJogador === '') {
            p.innerText = 'Computador: escolha sua opção primeiro!'
            this.sectionComputador.appendChild(p)
        } else {
            p.innerText = `${escolha.toLocaleUpperCase()}`
            this.sectionComputador.appendChild(p)
        }

        this.jogadaComputador = escolha

        return this.jogadaComputador
    }

    static jogadorVencedor() {
        this.sectionVencedor.innerHTML = ''

        const p = document.createElement('p')
        if (this.jogadaJogador === '') {
            p.innerText = ''
            return this.sectionVencedor.appendChild(p)
        }
        if (this.jogadaJogador === this.jogadaComputador) {
            p.innerText = 'EMPATE!'
            return this.sectionVencedor.appendChild(p)
        }

        if (this.jogadaJogador == 'pedra' && this.jogadaComputador == 'tesoura') {
            p.innerText = 'VOCÊ GANHOU!'
            return this.sectionVencedor.appendChild(p)
        }

        if (this.jogadaJogador == 'tesoura' && this.jogadaComputador == 'papel') {
            p.innerText = 'VOCÊ GANHOU!'
            return this.sectionVencedor.appendChild(p)
        }

        if (this.jogadaJogador == 'papel' && this.jogadaComputador == 'pedra') {
            p.innerText = 'VOCÊ GANHOU!'
            return this.sectionVencedor.appendChild(p)
        }
        else
            p.innerText = 'COMPUTADOR GANHOU!'
        return this.sectionVencedor.appendChild(p)
    }
}

export { Jogar }
