import promptSync from 'prompt-sync';
import Conta from './conta';
import PJ from './PJ';
import PF from './PF';


const userPrompt = promptSync();

const User1: Conta = new Conta(["João"], 2500, 123);
const User2: Conta = new Conta(["Thiago"], 8500, 456);

const User3: PJ = new PJ("12.345.678/0001-99", User1.nome, User1.saldo, User1.numero);
const User4: PF = new PF("056.787.985-09", User2.nome, User2.saldo, User2.numero);


let escolha: number;

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
            const valorSaque = parseFloat(userPrompt("Digite o valor do saque: ") || "0");
            User3.saque(valorSaque);
            User4.saque(valorSaque);
            
            break;
        case 2:
            //deposito
            const valorDeposito = parseFloat(userPrompt("Digite o valor do deposito: ") || "0");
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

