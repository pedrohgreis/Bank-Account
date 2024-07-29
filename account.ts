//importações
import promptSync from 'prompt-sync'; //importa um módulo que captura entradas do usuário

import Conta, { ContaPF, ContaPJ } from './classes';
const prompt = promptSync(); //cria uma instancia do prompt-sync

// lista de clientes
const contas: Conta[] = [];

const contaPF1 = new ContaPF("Carlinhos Pinto", 1000, 12345678, '121212', '123.456.789-00');
const contaPJ1 = new ContaPJ('Empresa Papel e CIA', 50000, 45611223, '121212', '12.345.678/0001-95');

contas.push(contaPF1, contaPJ1);

//////////////////////////////////////////

let escolha: number;

console.log("-------------------------------------\n" +
    "|  Bem vindo ao Banco Aspili Getas  |\n" +
    "| Por favor, insira suas informações|");

do {
    let numeroConta = parseInt(prompt("Número da conta:"), 10); // converte uma string para número inteiro de base decimal

    let procuraConta = (numero: number) => contas.findIndex(conta => conta.numero === numero);//aqui pode gossar
    var indiceConta=procuraConta(numeroConta);

    if (indiceConta == -1) {
        console.log("\nConta não existente\n");
        continue;
    }

    let inputSenha = prompt("Senha da conta: ");
    if (contas[indiceConta].senha !== inputSenha) {
        console.log("\nSenha incorreta, operação reiniciada\n");
        continue;
    }

    break;
} while (true);

do {
    console.log(
        "|-----------------------------|\n" +
        "|-----SELECIONE UMA OPÇÃO-----|\n" +
        "|-----------------------------|\n" +
        "|- 1 SACAR                   -|\n" +
        "|- 2 DEPOSITAR               -|\n" +
        "|- 3 EXTRATO                 -|\n" +
        "|- 0 SAIR                    -|\n" +
        "|-----------------------------|");

    escolha = parseInt(prompt("Escolha uma opção: "), 10); // converte uma string para número inteiro de base decimal

    switch (escolha) {
        case 1:
            // sacar
            let saque = parseFloat(prompt("Digite o valor que deseja sacar: "));
            if(contas[indiceConta].saldo>=saque){
                contas[indiceConta].saldo-=saque;
            }else{
                console.log("Valor excede seu saldo, operação encerrada");
            }

            break;
        case 2:
            // depositar
            let deposito = parseFloat(prompt("Digite o valor que deseja sacar: "));
            contas[indiceConta].saldo+=deposito;
            break;
        case 3:
            // extrato
            console.log(`${contas[indiceConta].saldo}`);
            break;
        case 0:
            process.exit(0); // encerra o processo com código de status 0
            break;
        default:
            console.log("\nDigite uma opção válida\n");
            break;
    }
} while (true);

