console.log('BIKCRAFT');
/**

const btnEscolha= document.getElementById('btn-escolha');
const subtituloIntroducao = document.getElementById('subtitulo-introducao');

console.log('BOTAO ENCONTRADO');
btnEscolha.textContent = 'Escolha sua bike'; // mudar o texto do local
subtituloIntroducao.textContent = 'texto aqui';
**/

/**
 * ADICIONAR EVENTOS
 * 1 - SELECIONAR O ELEMENTO NO HTML (DOM)
 * 2 - FALAR QUAL O EVENTO QUE A GENTE QUER CAPTURAR (click, mver mouse, digitação, scroll, etc)
 * 3 - O QUE FAZER QUANDO AQUELE EVENTO ACONTECER (callbcak)
 */

/** 
btnEscolha.addEventListener('click', function() {
    console.log('clicou no botão');
})

btnEscolha.addEventListener('click', (event) => {
    console.log('CLIQUEI NO BOTÃO');
});
**/


/** 
const img1 = document.getElementById('img1');
const nome1 = document.getElementById('nome1');
const preco1 = document.getElementById('preco1');
const img2 = document.getElementById('img2');
const nome2 = document.getElementById('nome2');
const preco2 = document.getElementById('preco2');
const img3 = document.getElementById('img3');
const nome3 = document.getElementById('nome3');
const preco3 = document.getElementById('preco3');
*/

const bikes = document.querySelectorAll('.bike');
console.log(bikes);
bikes.forEach((bike) => {
    bike.addEventListener('click', () => {
        const img = bike.querySelector('.foto-bike').src;
        const nome = bike.querySelector('.nome-bike').textContent;
        const preco = bike.querySelector('.preco-bike').textContent;
        console.log('Clicou na imagem da bike:', img);
        console.log('Clicou na bike:', nome);
        console.log('Preço:', preco);
    });
});


/** 
img1.addEventListener('click', () => {
    console.log('clicou na imagem 1');
    console.log(nome1.textContent);
    console.log(preco1.textContent);
});
img2.addEventListener('click', () => {
    console.log('clicou na imagem 2');
    console.log(nome2.textContent);
    console.log(preco2.textContent);
});
img3.addEventListener('click', () => {
    console.log('clicou na imagem 3');
    console.log(nome3.textContent);
    console.log(preco3.textContent);
});
*/