import { Player } from "./construtor.js";
import { options } from "./db.js"

class ControleJogador {
    static nomeJogador(jogador){
        const newPlayer = new Player(jogador)
        options.jogador.push(newPlayer)

        return options.jogador
    }
}

export { ControleJogador }
