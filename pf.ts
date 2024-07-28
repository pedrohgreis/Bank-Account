import Conta from './conta'

export default class PF extends Conta{
    private _cpf:string;

    constructor(cpf:string, nome:string[],saldo:number,numero:number){
        super(nome,saldo,numero);
        this._cpf = cpf;
    }

    //Métodos

    saque(valor: number): void{
        if(valor > 0 && valor <= this.saldo && valor <= 300){
            console.log("Saque realizado!");
            super.saque(valor)
        }
        else{
            console.log("Não foi possível realizar o saque!");
        }
    }
 
     deposito(valor: number): void {
        if(valor > 0 && valor <= 500){
            console.log(("Deposito realizado!"));
            super.deposito(valor)
        }
        else{
            console.log("Não foi possível realizar o depósito!");
        }
    }

}