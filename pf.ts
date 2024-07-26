import Conta from './conta'

export default class PF extends Conta{
    private _cpf:string;

    constructor(cpf:string, nome:string[],saldo:number){
        super(nome,saldo);
        this._cpf = cpf;
    }

    //Métodos
}