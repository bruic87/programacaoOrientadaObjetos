import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Bruno";
cliente1.cpf = 11122233300;

const cliente2 = new Cliente();
cliente2.cpf = 22233344499;
cliente2.nome = "Thaysa";

const contaCorrenteBruno = new ContaCorrente();
contaCorrenteBruno.agencia = 1001;
contaCorrenteBruno.cliente = cliente1;

contaCorrenteBruno.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

contaCorrenteBruno.transferir(200, conta2); 

console.log(conta2);
console.log(contaCorrenteBruno);
