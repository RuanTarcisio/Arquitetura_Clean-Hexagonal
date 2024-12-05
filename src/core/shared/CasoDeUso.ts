export default interface CasoDeUso<IN, OUT> {

    executar (entrada: any): Promise<any>
}