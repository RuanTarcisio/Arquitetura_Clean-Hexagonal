import corrida from "@/core/fundamentos/corrida"
import TerminalUtil from "../util/terminalUtil"
import Carro from "@/core/fundamentos/Carro"
import Fusca from "@/core/fundamentos/Fusca"
import Ferrari from "@/core/fundamentos/Ferrari"
import Civic from "@/core/fundamentos/Civic"
import { terminal } from "terminal-kit"

export default async function dip() {
    TerminalUtil.titulo("DIP")

    const [tipo] = await TerminalUtil.selecao(
        "Selecione um carro: ",
        ["Fusca", "Ferrari", "Civic"]
    )

    let carro: Carro

    switch (tipo) {
        case 0:
            carro = new Fusca()
            break
        case 1:
            carro = new Ferrari()
            break
        case 2: carro = new Civic()
            break
        default: carro = new Ferrari()
            break
    }

    corrida(carro, terminal.red)
    await TerminalUtil.esperarEnter()
}
