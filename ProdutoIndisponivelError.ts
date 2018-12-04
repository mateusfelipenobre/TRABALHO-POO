export class ProdutoIndisponivelError implements Error{
    public name : string;
    public message : string;

    public constructor(message : string = ""){
        this.name = "ProdutoIndisponivelError";
        this.message = message;
    }
}
//import { ProdutoIndisponivelError } from "./ProdutoIndisponivelError";