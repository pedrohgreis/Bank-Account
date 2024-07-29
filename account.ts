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

let login: number;
let usuario: number = 0;
let xd: number;
let continueLoop: boolean = true;

/*do {
    console.log("-----------------------------");
    console.log("Digite seu login:            ");
    console.log("-----------------------------");

    login = parseInt(userPrompt("Digite aqui: ") || "0");

    if (login === 1234) {
        xd = 1;
    } else if (login === 4321) {
        xd = 2;
    } else {
        console.log("Erro404!");
    }
} while (continueLoop);
*/

do {
    console.log("-----------------------------");
    console.log("---SELECIONE UMA OPÇÃO---");
    console.log("-----------------------------");
    console.log("- 1 SACAR                   -");
    console.log("- 2 DEPOSITAR               -");
    console.log("- 3 EXTRATO                 -");
    console.log("- 0 SAIR                    -");
    console.log("-----------------------------");

    escolha = parseInt(userPrompt("Escolha uma opção: "));

    switch (escolha) {
        case 1:
            //saque
            const valorSaque = parseFloat(userPrompt("Digite o valor do saque: ") || "0"); //PERGUNTAR || 0

            usuario = parseInt(userPrompt("Escolha uma opção de usuario: 1 João / 2 Thiago: "));
            if(usuario == 1)
            {
                console.log(User3.saque(valorSaque));// USAR USER 3 POIS É A CLASSE PESSOA JURIDICA QUE CONTEM METODOS PUBLICOS
            }
            else if(usuario == 2)
                {
                    console.log(User3.saque(valorSaque));// USAR USER 4 POIS É A CLASSE PESSOA JURIDICA QUE CONTEM METODOS PUBLICOS
                }
            break;
        case 2:
            //deposito
            const valorDeposito = parseFloat(userPrompt("Digite o valor do deposito: "));
            
            usuario = parseInt(userPrompt("Escolha uma opção de usuario: 1 João / 2 Thiago: "));
            if(usuario == 1)
                {
                    console.log(User3.deposito(valorDeposito));
                }
                else if(usuario == 2)
                    {
                        console.log(User4.deposito(valorDeposito));
                    }
                break;

            
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