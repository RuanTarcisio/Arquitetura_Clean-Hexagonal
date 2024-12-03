"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Na arquitetura hexagonal esta classe é um Adaptador!
// O adaptador NÃOOOOO faz parte do core da sua aplicação
class InverterSenhaCripto {
    criptografar(senha) {
        return senha.split('').reverse().join('');
    }
}
exports.default = InverterSenhaCripto;
