const prompt = require('prompt-sync')();
/**
 * calcularIMC ->
 * recebe:
 * - peso
 * - altura
 *
 * fórmula:
 * imc = peso / (altura * altura)
 *
 * mostrar no console:
 *
 * abaixo de 18.5 -> "Abaixo do peso"
 * entre 18.5 e 24.9 -> "Peso normal"
 * entre 25 e 29.9 -> "Sobrepeso"
 * acima de 30 -> "Obesidade"
 *
 * retornar o valor do IMC com 2 casas decimais
 */

class Calcular {
    peso = 0
    altura = 0

    constructor(peso,altura){
    this.peso = peso
    this.altura = altura
    }

        formula(){
         if (this.peso <= 0 || this.peso > 500 ||
             this.altura <= 0 || this.altura > 2.5){
              return console.log("O peso ou altura não possuem um valor permitido (permitido apenas valores acima de 0!)")
          } 
         let imc = this.peso / (this.altura * this.altura)

          console.log(`Seu valor de IMC é: ${imc.toFixed(2)}`)

         if (imc < 18.5){
             console.log("Abaixo do peso")
         }
         else if (imc < 25 ) {
             console.log("Peso normal")
         }
         else if (imc <30) {
             console.log("Sobrepeso")
         }
          else {
             console.log("Obesidade")
        }
    }

   

}
   

const peso = Number(prompt("Informe seu peso em kg: "))
const altura = Number(prompt("Informe sua altura em metros: "))

const IMC = new Calcular(peso, altura)

IMC.formula()