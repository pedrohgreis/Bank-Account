import Conta from './conta'

export default class PJ extends Conta{
    private _cnpj:string;

    constructor(cnpj:string, nome:string[], saldo:number,numero:number){
        super(nome, saldo, numero);
        this._cnpj = cnpj;
    }

    //Métodos

    saque(valor: number): void{
        if(valor > 0 && valor <= this.saldo && valor <= 1000){
            console.log("Saque realizado!");
            super.saque(valor);
        }
        else{
            console.log("Não foi posspível realizar o saque!");
        }
    }

    deposito(valor: number): void {
        if(valor > 0 && valor <= 1500){
            console.log(("Deposito realizado!"));
            super.deposito(valor)
        }
        else{
            console.log("Não foi posspível realizar o depósito!");
            
        }
    }
}