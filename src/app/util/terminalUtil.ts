import { terminal } from "terminal-kit"

export default class TerminalUtil {
    static titulo(texto: string) {
        terminal.clear()
        terminal.magenta(`\n${texto}\n`)
        terminal.magenta(`-`.repeat(texto.length) + `\n`)
    }

    static limpar() {
        terminal.clear()
    }

    static exibirChaveValor(chave: string, valor: any){
      terminal.yellow(chave).green(valor).white('\n')
    }


    static async menu(
      texto: string,
      opcoes: string[]
  ): Promise<[number, string]> {
   terminal.yellow(`\n${texto}\n`)
      const resposta = await terminal.singleColumnMenu(opcoes).promise;
      return [resposta.selectedIndex, resposta.selectedText];
  }

    static async selecao(
        texto: string,
        opcoes: string[]
    ): Promise<[number, string]> {
        terminal.yellow(`\n${texto}\n`)
        const resposta = await terminal.singleLineMenu(
            opcoes
        ).promise
        return [
            resposta.selectedIndex,
            resposta.selectedText,
        ]
    }

    static async confirmacao(
        texto: string
    ): Promise<boolean> {
        terminal.yellow(`\n${texto}\n`)
        const resposta = await terminal.singleLineMenu([
            "Sim",
            "Nao",
        ]).promise
        return resposta.selectedIndex === 0
    }

    static async esperarEnter(): Promise<void>{
        terminal.white("\nPressione ENTER para continuar...")
        await terminal.inputField({echo: false}).promise
    }
}
