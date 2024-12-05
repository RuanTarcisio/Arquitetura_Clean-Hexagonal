import Carro from "./Carro"

export default class Fusca implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 140,
        private _velocidadeAtual: number = 0
    ) {}

    frear(): void {
        this._velocidadeAtual = Math.max(
            this._velocidadeAtual - 5,
            0
        )

    }

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 5,
            this.velocidadeMaxima
        )
    }

    get velocidadeAtual() {
        return this._velocidadeAtual
    }
}