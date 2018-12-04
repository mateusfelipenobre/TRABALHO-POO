
import {Usuario} from './Usuario';
import { Pedido } from './Pedido';
import {Estabelecimento} from "./Estabelecimento";
import { ProdutoImpl } from './ProdutoImpl';


let est : Estabelecimento = new Estabelecimento('centro','estudante antonio brito','112','','Edi Lanches','edilanches','edilanches@gmail.com','5599',2,)
est.adicionarCardapio(1,'Pizza Quatro queijos','Pizza Media',15,20)
est.adicionarCardapio(2,'Hamburguer de Bacon','Médio',15,15)
est.retornarCardapio()
console.log(est.retornarCardapio())
console.log(est.mostrarEstabelecimento())