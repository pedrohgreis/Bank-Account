class ContaPF {
    nome: string;
    cpf: string;
    saldo: number;
    extrato: number;

    constructor(nome: string, cpf: string, saldo: number, extrato: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
        this.extrato = extrato;
    }
}

class ContaPJ {
    nome: string;
    cnpj: string;
    saldo: number;
    extrato: number;

    constructor(nome: string, cnpj: string, saldo: number, extrato: number) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.saldo = saldo;
        this.extrato = extrato;
    }
}

class Banco {
    banco: string;
    contaPF: ContaPF | null;
    contaPJ: ContaPJ | null;

    constructor(banco: string, contaPF: ContaPF | null, contaPJ: ContaPJ | null) {
        this.banco = banco;
        this.contaPF = contaPF;
        this.contaPJ = contaPJ;
    }
}

let escolha: number;
do {
    console.log("-----------------------------");
    console.log("---SELECIONE A INSTITUIÇÃO---");
    console.log("-----------------------------");
    console.log("- 1 BTG Pactual             -");
    console.log("- 2 Banco do Brasil         -");
    console.log("- 3 Banco PAN               -");
    console.log("-----------------------------");

    escolha = parseInt(prompt("Escolha uma instituição (1, 2 ou 3):") || "0");

    switch(escolha) {
        case 1:
            BTG();
            break;
        case 2:
            BancoDoBrasil();
            break;
        case 3:
            BancoPAN();
            break;
        default:
            console.log("Alternativa inválida, tente novamente!");
            break;
    }

} while (escolha < 1 || escolha > 3);
