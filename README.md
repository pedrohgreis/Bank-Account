### Proposta de Sistema Bancário

Contexto:
Desenvolver um sistema bancário com funcionalidades de consulta de saldo, extrato e depósito, diferenciando clientes pessoas físicas (CPF) e pessoas jurídicas (CNPJ).

### Requisitos e Backlog do Produto

#### Histórias do Usuário

1. *Como cliente pessoa física, quero realizar login no sistema usando meu CPF e senha para acessar minha conta.*
   - *Critérios de Aceitação:*
     - O sistema deve permitir o login usando CPF e senha.
     - O cliente deve visualizar um menu com opções de saldo, extrato e depósito após o login.

2. *Como cliente pessoa jurídica, quero realizar login no sistema usando meu CNPJ e senha para acessar minha conta.*
   - *Critérios de Aceitação:*
     - O sistema deve permitir o login usando CNPJ e senha.
     - O cliente deve visualizar um menu com opções de saldo, extrato e depósito após o login.

3. *Como cliente, quero consultar o saldo da minha conta para saber quanto dinheiro eu tenho disponível.*
   - *Critérios de Aceitação:*
     - O cliente deve acessar a opção de saldo no menu e visualizar o saldo atual da conta.

4. *Como cliente, quero visualizar o extrato da minha conta para acompanhar as transações realizadas.*
   - *Critérios de Aceitação:*
     - O cliente deve acessar a opção de extrato no menu e visualizar uma lista de transações.

5. *Como cliente, quero realizar depósitos na minha conta para aumentar meu saldo.*
   - *Critérios de Aceitação:*
     - O cliente deve acessar a opção de depósito no menu.
     - O cliente deve informar o valor do depósito.
     - O sistema deve atualizar o saldo da conta.

### Modelagem Gráfica

#### Diagrama de Classes UML

O diagrama fornecido no arquivo PDF define as principais classes e interações no sistema bancário. 

1. *Conta*: Classe base que representa uma conta bancária.
   - *Atributos:*
     - _nome: string
     - _saldo: number
     - _numero: number
     - _senha: string
   - *Métodos:*
     - getNome()
     - setNome(nome: string)
     - getSaldo()
     - setSaldo(saldo: number)
     - getNumero()
     - setNumero(numero: number)
     - getSenha()
     - setSenha(senha: string)
     - deposito(valor: number)
     - saque(valor: number)

2. *ContaPF*: Classe que representa uma conta de pessoa física, herda de Conta.
   - *Atributos:*
     - _cpf: string
   - *Métodos:*
     - getCpf()
     - setCpf(cpf: string)

3. *ContaPJ*: Classe que representa uma conta de pessoa jurídica, herda de Conta.
   - *Atributos:*
     - _cnpj: string
   - *Métodos:*
     - getCnpj()
     - setCnpj(cnpj: string)

4. *Menu*: Classe responsável por gerenciar o login e as interações com o usuário.
   - *Atributos:*
     - contas: Conta[]
   - *Métodos:*
     - login()
     - menuOpcoes()

### Ações a Tomar

- Elaborar detalhadamente cada história do usuário.
- Desenvolver e testar as funcionalidades básicas do sistema.
- Construir o diagrama de classes UML.
- Preparar a apresentação e revisão final.

### Requisitos de instalação e execução
Para usar o prompt-sync, você precisa instalá-lo via npm. Execute o seguinte comando para instalar o módulo:

- npm install prompt-sync
- npm i prompt-sync
- npm i --save-dev @types/prompt-sync
- Npm install @types/prompt-sync

Para rodar o process.exit(0)
- tsc --esModuleInterop main.ts
- node main.js
