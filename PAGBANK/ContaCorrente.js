import { Cliente } from "./Cliente.js";

export class ContaCorrente{

    static numerodeContas = 0;
    
    agencia;
    
    _saldo = 0;

    _cliente; 

    set cliente (novoValor){

      if(novoValor instanceof Cliente){
        this._cliente = novoValor;
    }
}
    get cliente(){
        return this._cliente;
    }


    saldo(){
        return this._saldo;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }



    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor; 
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        
    }


    constructor(agencia, cliente){

        this.agencia = agencia;
        
        this._cliente = cliente;
        
        ContaCorrente.numerodeContas +=1;

    }
}