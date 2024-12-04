import corrida from "@/core/corrida"
import TerminalUtil from "../util/terminalUtil"

export default async function dip(){
    TerminalUtil.titulo('DIP')
    corrida()
    await TerminalUtil.esperarEnter()
}

