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
const TerminalUtil_1 = __importDefault(require("@/app/util/TerminalUtil"));
const menuFundamentos_1 = __importDefault(require("./menuFundamentos"));
const menuUsuario_1 = __importDefault(require("./menuUsuario"));
function menuPrincipal() {
    return __awaiter(this, void 0, void 0, function* () {
        TerminalUtil_1.default.titulo("Menu Principal");
        const [indice] = yield TerminalUtil_1.default.menu([
            "1. Fundamentos",
            "2. Usuário",
            "Sair",
        ]);
        switch (indice) {
            case 0:
                yield (0, menuFundamentos_1.default)();
                break;
            case 1:
                yield (0, menuUsuario_1.default)();
                break;
            default:
                process.exit(0);
        }
        menuPrincipal();
    });
}
exports.default = menuPrincipal;
