"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Civic {
    constructor(velocidadeMaxima = 208, _velocidadeAtual = 0) {
        this.velocidadeMaxima = velocidadeMaxima;
        this._velocidadeAtual = _velocidadeAtual;
    }
    acelerar() {
        this._velocidadeAtual = Math.min(this._velocidadeAtual + 10, this.velocidadeMaxima);
    }
    frear() {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 10, 0);
    }
    get velocidadeAtual() {
        return this._velocidadeAtual;
    }
}
exports.default = Civic;
