import TerminalUtil from "@/app/util/terminalUtil"
import polimorfismo from "../fundamentos/polimorfismo"
import dip from "../fundamentos/dip"
import registrarUsuario from "../usuario/registrarUsuario"

export default async function menuUsuario() {
    TerminalUtil.titulo("Usuario")

    const [indice] = await TerminalUtil.menu(
        "Escolha uma opção:",
        ["1. Registrar Usuario", "Voltar"]
    )

    switch (indice) {
        case 0:
            await registrarUsuario()
            break
        default:
            return
    }

    await menuUsuario()
}
