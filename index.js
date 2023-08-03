import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Bruno", 11122233300);

const cliente2 = new Cliente("Thaysa", 22233344499);

const contaCorrenteBruno = new ContaCorrente(1001, cliente1);

contaCorrenteBruno.depositar(500);

const conta2 = new ContaCorrente(1002, cliente2);

contaCorrenteBruno.transferir(200, conta2); 

console.log(cliente1);
