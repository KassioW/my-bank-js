class Conta{    
    agencia;
    numero;
    cliente;
    _saldo = 0.0;

 
    get _saldo(){
        return this._saldo;
    }

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;            
            return valor;
        }
    }
  
    depositar(valor){
        if(valor > 0){
            this._saldo = this._saldo + valor
        }
            
    }
       
      transferir(valor, contaDestino){
        if (valor <= 0){
            console.log("Você não tem saldo suficiente para essa transferência");  
            return;
        }
      
        else if (valor > 0) {
            const valorSacado = this.sacar(valor);
            contaDestino.depositar(valorSacado);  
        }   
    }
}
module.exports = Conta;