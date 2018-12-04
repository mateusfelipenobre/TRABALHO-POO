export interface Produto{
    id : number; 
    nomeProduto : string;
    descricao: string;
    preco : number;
    tempoPreparo : number;

    getId(): number;// Retorna a id do produto;
    setId(id: number): void; //edita a id do produto;
    getNomeProduto(): string; // retona o nome do produto;
    setNomeProduto(nome : string): void; // edita o nome do produto;
    getPreco(): number; // retorna o preco do produto;
    setPreco(preco : number): void; // edita o preco do produto;
    getTempoPrep(): number;// retorna o tempo de preparo;
    setTempoPrep(tempoPrep: number): void; // edita o tempo de preparo;
    toStringProduto(): string; //Retorna o Produto;
}