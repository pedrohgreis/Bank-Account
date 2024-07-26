import Conta from './conta'

export default class PJ extends Conta{
    private _cnpj:string;

    constructor(cnpj:string, nome:string[], saldo:number){
        super(nome, saldo);
        this._cnpj = cnpj;
    }

    //Métodos
}