"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const terminal_kit_1 = require("terminal-kit");
class TerminalUtil {
    static titulo(texto) {
        terminal_kit_1.terminal.clear();
        terminal_kit_1.terminal.magenta(`${texto}\n`);
        terminal_kit_1.terminal.magenta(`-`.repeat(texto.length) + `\n`);
    }
    static limpar() {
        terminal_kit_1.terminal.clear();
    }
    static exibirChaveValor(chave, valor) {
        terminal_kit_1.terminal.yellow(chave).green(valor).white("\n");
    }
    static campoRequerido(label, valorPadrao = "") {
        return __awaiter(this, void 0, void 0, function* () {
            terminal_kit_1.terminal.yellow(`\n${label}`);
            const valor = yield terminal_kit_1.terminal.inputField({
                default: valorPadrao,
            }).promise;
            if (valor)
                return valor;
            return TerminalUtil.campoRequerido(label);
        });
    }
    static menu(opcoes) {
        return __awaiter(this, void 0, void 0, function* () {
            const resposta = yield terminal_kit_1.terminal.singleColumnMenu(opcoes).promise;
            return [
                resposta.selectedIndex,
                resposta.selectedText,
            ];
        });
    }
    static selecao(texto, opcoes) {
        return __awaiter(this, void 0, void 0, function* () {
            terminal_kit_1.terminal.yellow(`\n${texto}`);
            const resposta = yield terminal_kit_1.terminal.singleLineMenu(opcoes).promise;
            return [
                resposta.selectedIndex,
                resposta.selectedText,
            ];
        });
    }
    static confirmacao(texto) {
        return __awaiter(this, void 0, void 0, function* () {
            terminal_kit_1.terminal.yellow(`\n${texto}`);
            const resposta = yield terminal_kit_1.terminal.singleLineMenu([
                "Sim",
                "Não",
            ]).promise;
            return resposta.selectedIndex === 0;
        });
    }
    static esperarEnter() {
        return __awaiter(this, void 0, void 0, function* () {
            terminal_kit_1.terminal.white("\nPressione ENTER para continuar...");
            yield terminal_kit_1.terminal.inputField({ echo: false }).promise;
        });
    }
    static sucesso(texto, novaLinha = true) {
        return __awaiter(this, void 0, void 0, function* () {
            terminal_kit_1.terminal.green((novaLinha ? '\n' : '') + texto);
        });
    }
    static erro(texto, novaLinha = true) {
        return __awaiter(this, void 0, void 0, function* () {
            terminal_kit_1.terminal.red((novaLinha ? '\n' : '') + texto);
        });
    }
}
exports.default = TerminalUtil;
