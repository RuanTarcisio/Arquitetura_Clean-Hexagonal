"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fusca {
    constructor(velocidadeMaxima = 140, _velocidadeAtual = 0) {
        this.velocidadeMaxima = velocidadeMaxima;
        this._velocidadeAtual = _velocidadeAtual;
    }
    acelerar() {
        this._velocidadeAtual = Math.min(this._velocidadeAtual + 5, this.velocidadeMaxima);
    }
    frear() {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 5, 0);
    }
    get velocidadeAtual() {
        return this._velocidadeAtual;
    }
}
exports.default = Fusca;
