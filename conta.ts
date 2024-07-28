//classe pai

export default class Conta{
    protected _nome:string[];
    protected _saldo:number;
    protected _numero:number; //numero da conta

    constructor(nome:string[], saldo: number = 0){
        this._nome = nome;
        this._saldo = saldo;
        this._numero = this.gerarNumero();
    }

    //gerar numero da conta bancária
    private gerarNumero():number{
        return Math.floor(Math.random()*100000 + 1);
    }

    get nome(): string[] {
        return this._nome;
    }

    public get saldo():number{
        return this._saldo
    }

    protected set saldo(saldo:number){
        this._saldo = saldo;
    }

    //deposito 
    protected deposito(valor:number){
        if(valor < 0){
            console.log("Valor Inválido!");
        } else{
            this.saldo += valor;
        }
    }

    //saque
    protected saque(valor:number){
        if(valor < 0 || valor > this.saldo){
            console.log("Saque não autorizado!");
        } else{
            this.saldo -= valor;
        }
    }

    info(){
        console.log("************************");
        console.log(`Titular: ${this._nome}`);
        console.log(`Numero Conta: ${this._numero}`);
        console.log(`Saldo: ${this.saldo}`);
        console.log(`Saldo: ${this.saque}`);
        console.log(`Saldo: ${this.deposito}`);
    }
}