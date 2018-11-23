export class Usuario{
    private nome : string;
    private fone : string;
    private endereco : string;
    public constructor(nome : string, fone: string, endereco: string,) {
        this.nome = nome;
        this.fone = fone;
        this.endereco = endereco
    }
}