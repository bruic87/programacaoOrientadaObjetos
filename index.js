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

contaCorrenteBruno.depositar(100);

const valorSacado = contaCorrenteBruno.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteBruno);
