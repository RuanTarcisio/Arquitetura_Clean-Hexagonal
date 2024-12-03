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
const corrida_1 = __importDefault(require("@/core/fundamentos/corrida"));
const TerminalUtil_1 = __importDefault(require("../util/TerminalUtil"));
const Fusca_1 = __importDefault(require("@/core/fundamentos/Fusca"));
const Ferrari_1 = __importDefault(require("@/core/fundamentos/Ferrari"));
const Civic_1 = __importDefault(require("@/core/fundamentos/Civic"));
const terminal_kit_1 = require("terminal-kit");
function dip() {
    return __awaiter(this, void 0, void 0, function* () {
        TerminalUtil_1.default.titulo('DIP');
        const [tipo] = yield TerminalUtil_1.default.selecao("Tipo de carro?", [
            "Fusca", "Civic", "Ferrari"
        ]);
        let carro;
        switch (tipo) {
            case 0:
                carro = new Fusca_1.default();
                break;
            case 1:
                carro = new Civic_1.default();
                break;
            default:
                carro = new Ferrari_1.default;
                break;
        }
        (0, corrida_1.default)(carro, terminal_kit_1.terminal.gray);
        yield TerminalUtil_1.default.esperarEnter();
    });
}
exports.default = dip;
