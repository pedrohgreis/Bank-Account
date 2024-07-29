export default class Conta{
    protected _nome:    string;
    protected _saldo:   number;
    protected _numero:  number;//número da conta
    protected _senha:   string;

    constructor(nome:string,saldo:number=0,numero:number,senha: string){
        this._nome=nome;
        this._saldo=saldo;
        this._numero=numero;
        this._senha=senha;
    }

    //Getter e setter para nome
    public get nome():string{
        return this._nome;
    }

    set nome(nome:string){
        this._nome=nome;
    }

    //Getter e setter para saldo
    public get saldo():number{
        return this._saldo;
    }

    set saldo(saldo:number){
        this._saldo=saldo;
    }

    //Getter e setter para numero
    public get numero():number{
        return this._numero;
    }

    set numero(numero:number){
        this._numero=numero;
    }

    //Getter e setter para senha
    public get senha():string{
        return this._senha;
    }

    set senha(senha:string){
        this._senha=senha;
    }

}

export class ContaPF extends Conta{
    protected _cpf: string;

    constructor(nome: string, saldo: number = 0, numero: number, senha: string,cpf: string) {
        super(nome, saldo, numero, senha); //Chama o construtor da classe base
        this._cpf=cpf;
    }

    // Getter e setter para CPF
    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }
}

export class ContaPJ extends Conta{
    protected _cnpj:string;

    constructor(nome: string, saldo: number = 0, numero: number, senha: string,cnpj: string) {
        super(nome, saldo, numero, senha); //Chama o construtor da classe base
        this._cnpj=cnpj;
    }

    // Getter e setter para CNPJ
    get cnpj(): string {
        return this._cnpj;
    }

    set cnpj(cnpj: string) {
        this._cnpj = cnpj;
    }
}