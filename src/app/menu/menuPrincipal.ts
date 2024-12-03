import TerminalUtil from "arquitetura_hexagonal/arquitetura_hexagonal/src/app/util/TerminalUtil";
import { terminal } from "terminal-kit";

export default async function menuPrincipal(){
    TerminalUtil.titulo("Menu teste")

    const resposta = await terminal.singleColumnMenu([
        '1. Fundamentos',
        'Sair'
    ]).promise
    
    switch (resposta.selectedIndex) {
        case 1:
            process.exit(0)        
        default:
            menuPrincipal();
    }
}
