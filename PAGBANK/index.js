import { Cliente } from "./Cliente.js";

import { ContaCorrente } from "./ContaCorrente.js";




const clienteCleo = new Cliente("Cleo Pires", 31960213433);

const clienteCleoCorrente = new ContaCorrente(101, clienteCleo);

clienteCleoCorrente.depositar(100);





const clienteGau = new Cliente("Gau Costa", 99201722508, 2771337921);

const clienteGauCorrente = new ContaCorrente(102, clienteGau);

clienteGauCorrente.depositar(200);

clienteGauCorrente.transferir(100, clienteCleoCorrente);


                console.log(clienteCleoCorrente);
                console.log(clienteGauCorrente);
                console.log("Número de Contas abertas:", ContaCorrente.numerodeContas);