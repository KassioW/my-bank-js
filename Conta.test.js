const Cliente = require('./Cliente');
const Conta = require('./Conta');

test('teste saque valor igual ao saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(100.0);

    expect(contaDoCliente01._saldo).toBe(0.0);
});

test('teste saque valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(200.0);

    expect(contaDoCliente01._saldo).toBe(100.0);
});

test('teste deposito valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(200.0);

    expect(contaDoCliente01._saldo).toBe(200.0);
});

test('teste deposito valor negativo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(-200.0);

    expect(contaDoCliente01._saldo).toBe(0);
});

test('teste transferencia de valor', () => {
    var cliente03 = new Cliente();
    cliente03.nome = 'Kawe da Silva';
    cliente03.cpf = '11133399954';
    var contaA = new Conta();
    contaA.agencia = 204;
    contaA.numero = 25;
    contaA.cliente = cliente03;
    
    contaA.depositar(100.0)
    

    var cliente04 = new Cliente();
    cliente04.nome = 'Kassio da Silva';
    cliente04.cpf = '22244499954';
    var contaB = new Conta();
    contaB.agencia = 205;
    contaB.numero = 255;
    contaB.cliente = cliente04;
    contaB.depositar(50);
    
    contaA.transferir(100, contaB)
    expect(contaB._saldo).toBe(150.0);
    expect(contaA._saldo).toBe(0.0)
});
