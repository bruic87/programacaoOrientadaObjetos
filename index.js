import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Bruno", 11122233300);
const cliente2 = new Cliente("Thaysa", 22233344499);

const contaCorrenteBruno = new ContaCorrente(cliente1, 1001);

contaCorrenteBruno.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);

contaCorrenteBruno.transferir(200, conta2); 

console.log(ContaCorrente.numeroDeContas);
