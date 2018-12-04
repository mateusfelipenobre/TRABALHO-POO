export class Endereco{
    private bairro: string;
    private rua: string;    
    private numeroCasa: string;    
    private complemento: string;

    public constructor(bairro : string, rua : string, numeroCasa : string, complemento : string){
        this.bairro = bairro;
        this.rua = rua;
        this.numeroCasa = numeroCasa;
        this.complemento = complemento;
    }
    
    public definirEndereco(bairro : string, rua : string, numeroCasa : string, complemento : string): void{
        this.bairro = bairro;
        this.rua = rua;
        this.numeroCasa = numeroCasa;
        this.complemento = complemento;
    }
    public verEndereco(): string{
        return this.bairro,this.rua,this.numeroCasa,this.complemento
    }
}