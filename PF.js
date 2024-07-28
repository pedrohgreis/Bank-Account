"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var conta_1 = __importDefault(require("./conta"));
var PF = /** @class */ (function (_super) {
    __extends(PF, _super);
    function PF(cpf, nome, saldo) {
        var _this = _super.call(this, nome, saldo) || this;
        _this._cpf = cpf;
        return _this;
    }
    //Métodos
    PF.prototype.saque = function (valor) {
        if (valor > 0 || valor <= this.saldo || valor <= 300) {
            console.log("Saque realizado!");
            _super.prototype.saque.call(this, valor);
        }
        else {
            console.log("Não foi posspível realizar o saque!");
        }
    };
    PF.prototype.deposito = function (valor) {
        if (valor > 0 || valor <= 500) {
            console.log(("Deposito realizado!"));
            _super.prototype.deposito.call(this, valor);
        }
        else {
            console.log("Não foi posspível realizar o depósito!");
        }
    };
    return PF;
}(conta_1.default));
exports.default = PF;
