import { ProdutoIndisponivelError } from "./ProdutoIndisponivelError";
import {Estabelecimento} from "./Estabelecimento";

export class Pedido{
    private tempoEntreg : number;
    private valorFinal : number;

    public adicionarProduto(id : number, nome : string,descricao: string, preco : number, tempoPrep : number): void{
        Estabelecimento.getCardapio().push(new ProdutoImpl(id,nome,descricao,preco,tempoPrep));
    }
}