import TerminalUtil from "@/app/util/terminalUtil"
import polimorfismo from "../fundamentos/polimorfismo"
import dip from "../fundamentos/dip"

export default async function menuFundamentos() {
    TerminalUtil.titulo("Fundamentos")

    const [indice] = await TerminalUtil.menu(
        "Escolha uma opção:",
        ["1. Polimorfismo", "2. DIP", "Voltar"]
    )

    switch (indice) {
        case 0:
            await polimorfismo()
            break
        case 1:
            await dip()
            break
        default:
            return
    }

    await menuFundamentos()
}
