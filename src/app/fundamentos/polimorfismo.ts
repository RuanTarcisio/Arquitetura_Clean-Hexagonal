import Fusca from "@/core/fundamentos/Fusca"
import TerminalUtil from "../util/terminalUtil"
import Ferrari from "@/core/fundamentos/Ferrari"

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo")

    const [tipoCarro] = await TerminalUtil.selecao(
        "Tipo de carro?",
        ["Ferrari", "Fusca"]
    )
    const carro =
        tipoCarro === 0 ? new Ferrari() : new Fusca()

    while (true) {
        TerminalUtil.limpar()
        TerminalUtil.exibirChaveValor(
            "Velocidade Máxima: ",
            `${carro.velocidadeMaxima} Km/h`
        )

        TerminalUtil.exibirChaveValor(
            "Velocidade Atual: ",
            `${carro.velocidadeAtual} Km/h`
        )

        const [opcao] = await TerminalUtil.selecao("Qual opção: ", ["Acelerar", "Frear"])

        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar = await TerminalUtil.confirmacao(
            "Deseja continuar?"
        )
        if (!continuar) return
    }
}
