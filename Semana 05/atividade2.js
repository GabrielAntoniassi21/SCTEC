const prompt = require('prompt-sync')();
/** 
 * contaBancaria->
 * -tirular 
 * -saldo - inicia em 0
 *deposita - valor - soma ao valor saldo
 sacar - valor
 extrato - nome | saldo
 * 
 * 
 */

 class conta {
    nome = ""
    saldo = 0

    constructor( nome, saldo){
        this.nome = nome
        this.saldo = saldo
    }

    extrato(){
        console.log(`Titular ${this.nome} | saldo R$ ${this.saldo}`)
    }

    depositar(valorDeposito){
        if (valorDeposito < 0 ){
            return console.log("Não é permitido o deposito de valores negativos.")
        }
        this.saldo = this.saldo + valorDeposito
        console.log(` Deposito realizado no valor de R$ ${valorDeposito}, saldo atual R$ ${this.saldo}`)
    }

    sacar(valorSaque){
        if (valorSaque < 0) {
            return console.log("Não é permitido o saque de valores negativos")
        }
        if (valorSaque > this.saldo ){
            return console.log("Voce nao possui saldo suficiente para esse saque")
        }
        this.saldo -= valorSaque
        console.log(` Saque realizado no valor de R$ ${valorSaque}, saldo atual R$ ${this.saldo}`)
    }

 }

 const conta1 = new conta ("joao", 2333)
 conta1.sacar(200)
const conta2 = new conta ("Gabriel", 8000)
conta2.depositar(600)