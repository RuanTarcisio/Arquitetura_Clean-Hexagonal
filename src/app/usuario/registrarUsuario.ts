import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/terminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";


export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuario")

    const id = await TerminalUtil.campoRequerido("Id: ", "eqweqw-reer!w-ghghfj-qewqeu")
    const nome = await TerminalUtil.campoRequerido("Nome: ", "Usuario Teste da Silva")
    const email= await TerminalUtil.campoRequerido("Email: ", "email@teste.com")
    const senha = await TerminalUtil.campoRequerido("Senha: ", "12343215")

    const usuario: Usuario = {id, nome, email, senha}

    await new RegistrarUsuario().executar(usuario)
    
    await TerminalUtil.sucesso("Usuário registrado com sucesso!")
    await TerminalUtil.esperarEnter()
   
}
