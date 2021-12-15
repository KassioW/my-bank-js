class Conta{    
    agencia;
    numero;
    cliente;
    _saldo = 0.0;

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo = this._saldo - valor;
        }        
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo = this._saldo + valor;
    }

    transferir(valor, contaDestino){
        // Implementar o código do método transferir               
        if (valor <= 0){
            console.log("Você não tem saldo suficiente para essa transferência");  
            return;
        }
        const valorsacado = this.sacar(valor);
        contaDestino.depositar(valorsacado);
    }
}     
    var contaA = new Conta();
    contaA.agencia = 204;
    contaA.numero = 25;
    contaA.cliente = cliente03;
    
    contaA.depositar(100.0)
    contaA.transferir(50.0, contaB)

    var contaB = new Conta();
    contaA.agencia = 205;
    contaA.numero = 255;
    contaA.cliente = cliente04;
    contaB.depositar(50.0)

console.log(contaB)
module.exports = Conta;