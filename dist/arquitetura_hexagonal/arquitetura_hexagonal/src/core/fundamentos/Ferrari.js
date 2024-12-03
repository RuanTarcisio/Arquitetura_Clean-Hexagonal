"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ferrari {
    constructor(velocidadeMaxima = 324, _velocidadeAtual = 0) {
        this.velocidadeMaxima = velocidadeMaxima;
        this._velocidadeAtual = _velocidadeAtual;
    }
    acelerar() {
        this._velocidadeAtual = Math.min(this._velocidadeAtual + 20, this.velocidadeMaxima);
    }
    frear() {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 20, 0);
    }
    get velocidadeAtual() {
        return this._velocidadeAtual;
    }
}
exports.default = Ferrari;
