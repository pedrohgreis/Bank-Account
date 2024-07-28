import promptSync from 'prompt-sync';
import Conta from './conta';
import PJ from './PJ';
import PF from './PF';


const userPrompt = promptSync();

const User1: Conta = new Conta(["João"], 2500);
const User2: Conta = new Conta(["Thiago"], 8500);

const User3: PJ = new PJ("12.345.678/0001-99", User1.nome, User1.saldo);
const User4: PF = new PF("056.787.985-09", User2.nome, User2.saldo);

//User3.info();
//User4.info();

let escolha: number;

do {
    console.log("-----------------------------");
    console.log("---SELECIONE UMA OPÇÃO---");
    console.log("-----------------------------");
    console.log("- 1 SACAR                   -");
    console.log("- 2 DEPOSITAR               -");
    console.log("- 3 VISUALIZAR DADOS              -");
    console.log("- 4 EXTRATO                 -");
    console.log("- 0 SAIR                    -");
    console.log("-----------------------------");

    escolha = parseInt(userPrompt("Escolha uma opção: ") || "0");

    switch (escolha) {
        case 1:
            //saque
            console.log("Digite o valor do saque");
            
            break;
        case 2:
            //deposito
            console.log("Digite o valor do deposito");
            break;
        case 3:
            //visualizar
            break;
        case 4:
            //extrato
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

