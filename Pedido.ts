class Pedido{
    private pedinte : Cliente[];
    private pacote : Produto[];
    private tempoEntreg : number;
    private valorFinal : number;

    public constructor(pedinte : Cliente[], pacote : Produto[], tempoEntreg : number, valorFinal : number){
        this.pedinte = pedinte;
        this.pacote = pacote;
        this.tempoEntreg = tempoEntreg;
        this.valorFinal = valorFinal;
    }

    public tempoTotal(produto : Produto){
        let total : number;
        total = produto.getTempoPrep() + this.tempoEntreg;
        return total; 
    }
}