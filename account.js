"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var conta_1 = __importDefault(require("./conta"));
var PJ_1 = __importDefault(require("./PJ"));
var PF_1 = __importDefault(require("./PF"));
var userPrompt = (0, prompt_sync_1.default)();
var User1 = new conta_1.default(["João"], 2500, 123);
var User2 = new conta_1.default(["Thiago"], 8500, 456);
var User3 = new PJ_1.default("12.345.678/0001-99", User1.nome, User1.saldo, User1.numero);
var User4 = new PF_1.default("056.787.985-09", User2.nome, User2.saldo, User2.numero);
var escolha;
var login;
var xd = 0;
var continueLoop = true;
do {
    console.log("-----------------------------");
    console.log("Digite seu login:            ");
    console.log("-----------------------------");
    login = parseInt(userPrompt("Digite aqui: ") || "0");
    if (login === 1234) {
        xd = 1;
    }
    else if (login === 4321) {
        xd = 2;
    }
    else {
        console.log("Erro404!");
    }
} while (continueLoop);
do {
    console.log("-----------------------------");
    console.log("---SELECIONE UMA OPÇÃO---");
    console.log("-----------------------------");
    console.log("- 1 SACAR                   -");
    console.log("- 2 DEPOSITAR               -");
    console.log("- 3 EXTRATO                 -");
    console.log("- 0 SAIR                    -");
    console.log("-----------------------------");
    escolha = parseInt(userPrompt("Escolha uma opção: ") || "0");
    switch (escolha) {
        case 1:
            //saque
            var valorSaque = parseFloat(userPrompt("Digite o valor do saque: ") || "0");
            User3.saque(valorSaque);
            User4.saque(valorSaque);
            break;
        case 2:
            //deposito
            var valorDeposito = parseFloat(userPrompt("Digite o valor do deposito: ") || "0");
            User3.saque(valorDeposito);
            User4.saque(valorDeposito);
            break;
        case 3:
            //extrato
            User1.info();
            User2.info();
            break;
        case 0:
            //sair
            process.exit(0);
            break;
        default:
            //erouuu
            break;
    }
} while (1);
