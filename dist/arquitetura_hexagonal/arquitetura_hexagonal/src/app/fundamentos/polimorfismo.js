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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TerminalUtil_1 = __importDefault(require("../util/TerminalUtil"));
const Ferrari_1 = __importDefault(require("@/core/fundamentos/Ferrari"));
const Fusca_1 = __importDefault(require("@/core/fundamentos/Fusca"));
function polimorfismo() {
    return __awaiter(this, void 0, void 0, function* () {
        TerminalUtil_1.default.titulo("Polimorfismo");
        const [tipoCarro] = yield TerminalUtil_1.default.selecao("Tipo de Carro?", ["Ferrari", "Fusca"]);
        const carro = tipoCarro === 0 ? new Ferrari_1.default() : new Fusca_1.default();
        while (true) {
            TerminalUtil_1.default.limpar();
            TerminalUtil_1.default.exibirChaveValor("Velocidade Máxima: ", `${carro.velocidadeMaxima} km/h`);
            TerminalUtil_1.default.exibirChaveValor("Velocidade Atual: ", `${carro.velocidadeAtual} km/h`);
            const [opcao] = yield TerminalUtil_1.default.selecao("Qual opção?", ["Acelerar", "Frear"]);
            opcao === 0 ? carro.acelerar() : carro.frear();
            const continuar = yield TerminalUtil_1.default.confirmacao("Deseja continuar?");
            if (!continuar)
                return;
        }
    });
}
exports.default = polimorfismo;
