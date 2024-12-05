import TerminalUtil from "../util/terminalUtil";


export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuario")

    const id = await TerminalUtil.campoRequerido("Id: ")
    const nome = await TerminalUtil.campoRequerido("Nome: ")
    const email= await TerminalUtil.campoRequerido("Email: ")
    const senha = await TerminalUtil.campoRequerido("Senha: ")

    await TerminalUtil.esperarEnter
   
}
