import promptSync from 'prompt-sync';
import Conta from './conta';
import PJ from './PJ';
import PF from './PF';


const userPrompt = promptSync();

const User1: Conta = new Conta(["João"], 2500);
const User2: Conta = new Conta(["Thiago"], 8500);

const User3: PJ = new PJ("12.345.678/0001-99", User1.nome, User1.saldo);
const User4: PF = new PF("056.787.985-09", User2.nome, User2.saldo);

User3.info();
User4.info();

// class ContaPF {
//     nome: string;
//     cpf: string;
//     saldo: number;
//     extrato: number;

//     constructor(nome: string, cpf: string, saldo: number, extrato: number) {
//         this.nome = nome;
//         this.cpf = cpf;
//         this.saldo = saldo;
//         this.extrato = extrato;
//     }
// }

// class ContaPJ {
//     nome: string;
//     cnpj: string;
//     saldo: number;
//     extrato: number;

//     constructor(nome: string, cnpj: string, saldo: number, extrato: number) {
//         this.nome = nome;
//         this.cnpj = cnpj;
//         this.saldo = saldo;
//         this.extrato = extrato;
//     }
// }

// class Banco {
//     banco: string;
//     contaPF: ContaPF | null;
//     contaPJ: ContaPJ | null;

//     constructor(banco: string, contaPF: ContaPF | null, contaPJ: ContaPJ | null) {
//         this.banco = banco;
//         this.contaPF = contaPF;
//         this.contaPJ = contaPJ;
//     }
// }

let escolha: number;
do {
    console.log("-----------------------------");
    console.log("---SELECIONE A INSTITUIÇÃO---");
    console.log("-----------------------------");
    console.log("- 1 BTG Pactual             -");
    console.log("- 2 Banco do Brasil         -");
    console.log("- 3 Banco PAN               -");
    console.log("-----------------------------");

    escolha = parseInt(userPrompt("Escolha uma instituição (1, 2 ou 3):") || "0");

    switch (escolha) {
        case 1:
            console.log("Você escolheu BTG Pactual!");
            break;
        case 2:
            console.log("Você escolheu Banco do Brasil!");
            break;
        case 3:
            console.log("Você escolheu Banco PAN!");
            break;
        default:
            console.log("Alternativa inválida, tente novamente!");
            break;
    }

} while (escolha < 1 || escolha > 3);

do {
    console.log("-----------------------------");
    console.log("---SELECIONE UMA OPÇÃO---");
    console.log("-----------------------------");
    console.log("- 1 SACAR                   -");
    console.log("- 2 DEPOSITAR               -");
    console.log("- 3 VISUALIZAR              -");
    console.log("- 4 EXTRATO                 -");
    console.log("- 0 SAIR                    -");
    console.log("-----------------------------");

    escolha = parseInt(userPrompt("Escolha uma instituição (1, 2 ou 3):") || "0");

    switch (escolha) {
        case 1:
            console.log("Digite o valor do saque");
            break;
        case 2:
            console.log("Digite o valor do deposito");
            break;
        case 3:
            
            break;
        default:
            
            break;
    }

} while (escolha < 1 || escolha > 3);

