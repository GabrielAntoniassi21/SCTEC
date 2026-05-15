/**
 *  pagamentos -> valor a ser pago, destino da conta, processar()
 * -pix - > PIX de R$ xx.xx realizado -> origem do dinheiro, chave pix(destino), mandei errada()
 * - caratao de credito -> Pagamento nop cartaop xx de R$ xx.xx aprovado -> numero do cartao e o estab. destino naoFuiEu()
 * - boleto -> Boleto pago com sucesso -> ag/conta bancaria destino
 */ 

class FormaPagamento {
    valor = 0  //defino valor inicial 0 para acrescentar um valor depois

    constructor(valor){
        this.valor = valor
    }

    pagar(){ // defino um metodo que vai estar presente em todas as classes
        console.log(`Processando pagamento. Aguarde...`)
    }
}

class Pix extends FormaPagamento {
    PixDestino = "" // Defino uma variavel para o contructor que vai adicionar o endereço de quem recebeu o pix

    constructor(valor, PixDestino){
        super(valor)
        this.PixDestino = PixDestino
    }

     pagar(){// pagar do pix que irá retornar o valor realizado e o destino
        console.log(`Pix realizado com sucesso no valor de R$ ${this.valor}, para ${this.PixDestino}.`)
    }
}

const contaLuz = new Pix(149, "121.564.299-79") // defino o valor e o destino (valor, destino)
contaLuz.pagar()

class Boleto extends FormaPagamento {
nmrBoleto = ""

    constructor(valor, nmrBoleto){
        super(valor)
        this.nmrBoleto = nmrBoleto
    }

    pagar(){
        console.log(`O boleto de código ${this.nmrBoleto} realizado com sucesso no valor de R$ ${this.valor}.`)
}

}

const contaEnergia = new Boleto(552, "152458654")
contaEnergia.pagar()