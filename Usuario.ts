import {Endereco} from './Endereco';
export class Usuario extends Endereco{
    private nome: string;
    private username: string;
    private email: string;
    private senha: string;
    
    public constructor(bairro : string, rua : string, numeroCasa : string, complemento : string, nome : string, username: string, email: string, senha : string) {
        super(bairro,rua,numeroCasa,complemento)
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.senha = senha;
    }
    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }
    public getUsername(): string {
        return this.username;
    }
    public setUsername(value: string) {
        this.username = value;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }
    public getSenha(): string {
        return this.senha;
    }
    public setSenha(value: string) {
        this.senha = value;
    }
}