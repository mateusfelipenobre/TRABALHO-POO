class Produto{
    private nome : string;
    private preco : number;
    private tempoPrep : number;
    private quantidade : number;

    public constructor(nome : string, preco : number, tempoPrep : number, quantidade : number){
        this.nome = nome;
        this.preco = preco;
        this.tempoPrep = tempoPrep;
        this.quantidade = quantidade;
    }
    public getNome(): string{
        return this.nome;
    }
    public setNome(nome : string): void{
        this.nome = nome;
    }
    public getPreco(): number{
        return this.preco;
    }
    public setPreco(preco : number): void{
        this.preco = preco;
    }
    public getTempoPrep(): number{
        return this.tempoPrep;
    }
    public setTempoPrep(tempoPrep: number): void{
        this.tempoPrep = tempoPrep;
    }
    public getquantidade(): number{
        return this.quantidade;
    }
    public setquantidade(quantidade : number): void{
        this.preco = quantidade;
    }
    public vender(): void{
        this.quantidade -= 1;
    }
    public adicionar(quantidade : number ): void{
        this.quantidade += quantidade;
    }
}