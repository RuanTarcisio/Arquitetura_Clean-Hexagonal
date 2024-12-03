"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function corrida(carro, logger = console.log) {
    Array.from({ length: 10 }).forEach(() => {
        carro.acelerar();
        logger(`\nVelocidade: ${carro.velocidadeAtual}`);
    });
    Array.from({ length: 10 }).forEach(() => {
        carro.frear();
        logger(`\nVelocidade: ${carro.velocidadeAtual}`);
    });
}
exports.default = corrida;
