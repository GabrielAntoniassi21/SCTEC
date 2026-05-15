class Animal {
    nomeAnimal = ''
    constructor(nome) {
        this.nomeAnimal = nome
    }

    comer(){
        console.log("O animal está comendo");
    }
}


class Cachorro extends Animal {
raca = ''
 constructor(nome, raca){
    super(nome);
    this.raca = raca
 }

    latir(){
        console.log(`O ${this.nomeAnimal} da raça ${this.raca} está latindo`);
        }  
        
    abanarRabo(){
        console.log(`O ${this.nomeAnimal} está abanando o rabo`);
    }
}

class Gato extends Animal {
        miar(){
            console.log(`O ${this.nomeAnimal} está miando`);
        } 
    }

    const cachorro = new Cachorro('Rex', 'Labrador');
    const gato = new Gato('lili');
    cachorro.latir();
    cachorro.comer();
    cachorro.abanarRabo();