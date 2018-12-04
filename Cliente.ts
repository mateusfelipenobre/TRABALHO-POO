import {Usuario} from './Usuario';
import { Pedido } from './Pedido';
import {Estabelecimento} from "./Estabelecimento";
class Cliente extends Usuario{
    private pedidos : Pedido[];

    public constructor(bairro : string, rua : string, numeroCasa : string, complemento : string,
                         nome : string, username: string, email: string, senha : string,){
        super(bairro,rua,numeroCasa,complemento,nome,username,email,senha)
        this.pedidos = []
    }
    public adicionarCardapio(id : number, nome : string,descricao: string, preco : number, tempoPrep : number): void{
        this.cardapio.push(new ProdutoImpl(id,nome,descricao,preco,tempoPrep));
    }
    
}