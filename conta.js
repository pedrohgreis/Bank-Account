"use strict";
//classe pai
Object.defineProperty(exports, "__esModule", { value: true });
var Conta = /** @class */ (function () {
    function Conta(nome, saldo, numero) {
        if (saldo === void 0) { saldo = 0; }
        this._nome = nome;
        this._saldo = saldo;
        this._numero = numero;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        //gerar numero da conta bancária
        // private gerarNumero():number{
        //     return Math.floor(Math.random()*100000 + 1);
        // }
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (saldo) {
            this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    //deposito 
    Conta.prototype.deposito = function (valor) {
        if (valor < 0) {
            console.log("Valor Inválido!");
        }
        else {
            this.saldo += valor;
        }
    };
    //saque
    Conta.prototype.saque = function (valor) {
        if (valor < 0 || valor > this.saldo) {
            console.log("Saque não autorizado!");
        }
        else {
            this.saldo -= valor;
        }
    };
    Conta.prototype.info = function () {
        console.log("************************");
        console.log("Titular: ".concat(this._nome));
        console.log("Numero Conta: ".concat(this._numero));
        console.log("Saldo: ".concat(this.saldo));
        console.log("Saldo: ".concat(this.saque));
        console.log("Deposito: ".concat(this.deposito));
    };
    return Conta;
}());
exports.default = Conta;
