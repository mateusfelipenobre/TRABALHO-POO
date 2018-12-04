import {Produto} from "./Produto";
export class ProdutoImpl implements Produto{
    private id : number; 
    private nomeProduto : string;
    private descricao: string;
    private preco : number;
    private tempoPreparo : number;

    public constructor(id : number,nomeProduto : string,descricao: string, preco : number, tempoPreparo : number){
        this.id = id
        this.nomeProduto = nomeProduto;
        this.descricao = descricao;
        this.preco = preco;
        this.tempoPreparo = tempoPreparo;
    }
    public getId(): number{
        return this.id;
    }
    public setId(id : number): void{
        this.id = id;
    }
    public getNomeProduto(): string{
        return this.nomeProduto;
    }
    public setNomeProduto(nomeProduto : string): void{
        this.nomeProduto = nomeProduto;
    }
    public getDescricao(): string {
        return this.descricao;
    }
    public setDescricao(value: string) {
        this.descricao = value;
    }
    public getPreco(): number{
        return this.preco;
    }
    public setPreco(preco : number): void{
        this.preco = preco;
    }
    public getTempoPreparo(): number{
        return this.tempoPreparo;
    }
    public setTempoPreparo(tempoPrep: number): void{
        this.tempoPreparo = tempoPrep;
    }
    public toString(): string{
        let str : string =''
        str += this.nomeProduto + "\n";
        str += 'Descrição: ' + this.descricao + "\n";
        str += 'Preço: R$' + this.preco + "\n";
        str += 'Tempo de Preparo: ' + this.tempoPreparo + 'min'+ "\n";
        str += 'Identificação: ' + this.id + '\n'
        str += "-------------------------------------------------"+ '\n';
        return str;
    }
}