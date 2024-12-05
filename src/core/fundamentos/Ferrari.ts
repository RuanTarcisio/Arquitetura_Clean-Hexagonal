import Carro from "./Carro"

export default class Ferrari implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 399,
        private _velocidadeAtual: number = 0
    ) {}

    frear(): void {
        this._velocidadeAtual = Math.max(
            this._velocidadeAtual - 20,
            0
        )

    }

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 20,
            this.velocidadeMaxima
        )
    }

    get velocidadeAtual() {
        return this._velocidadeAtual
    }
}
