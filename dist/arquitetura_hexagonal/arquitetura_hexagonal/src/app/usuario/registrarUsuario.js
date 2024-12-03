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
const RegistrarUsuario_1 = __importDefault(require("@/core/usuario/service/RegistrarUsuario"));
const RepositorioUsuarioPg_1 = __importDefault(require("@/adapter/db/RepositorioUsuarioPg"));
const SenhaCripto_1 = __importDefault(require("@/adapter/auth/SenhaCripto"));
const TerminalUtil_1 = __importDefault(require("../util/TerminalUtil"));
function registrarUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        const { campoRequerido, titulo, sucesso, erro, esperarEnter, } = TerminalUtil_1.default;
        titulo("Registrar Usuário");
        const nome = yield campoRequerido("Nome: ");
        const email = yield campoRequerido("Email: ");
        const senha = yield campoRequerido("Senha: ");
        const usuario = { nome, email, senha };
        try {
            const repositorio = new RepositorioUsuarioPg_1.default();
            const provedorCripto = new SenhaCripto_1.default();
            const casoDeUso = new RegistrarUsuario_1.default(repositorio, provedorCripto);
            yield casoDeUso.executar(usuario);
            sucesso("Usuário registrado com sucesso");
        }
        catch (e) {
            erro(e.message);
        }
        finally {
            yield esperarEnter();
        }
    });
}
exports.default = registrarUsuario;
