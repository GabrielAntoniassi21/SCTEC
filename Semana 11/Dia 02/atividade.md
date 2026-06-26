Aula 2 — Atividade prática: MinhaFeira (≈ 20 min)
Você recebeu uma página pronta da MinhaFeira — um app de lista de compras. Só que ela tem amnésia: se você adicionar itens e der F5, some tudo. Sua missão hoje é dar memória a ela com localStorage — e ver a lista continuar lá depois de recarregar.

Arquivos da atividade (pasta atividade-aluno-aula-2/):

index.html — a página pronta (não precisa mexer).
main.js — onde você trabalha. Tem 3 TODOs pra preencher e o resto já vem pronto.
Abra o index.html com o Live Server ("Go Live"). O localStorage precisa de um endereço de verdade (http://...) pra funcionar direito.

Antes de começar (leia 1 vez)
Onde você escreve: tudo no main.js, nos pontos marcados // TODO. Salve com Ctrl/Cmd + S a cada mudança.

Como conferir o localStorage: com a página aberta, aperte F12 (ou Cmd + Option + I) e use:

Application › Local Storage › (endereço do Live Server) → onde você vê a gaveta com o que foi salvo.
Console → onde aparecem os erros e onde você pode testar (console.log(carregarItens())).
O modelo de cada item: um objeto { nome: "Arroz" }. A lista inteira é um array desses objetos.

Caminho-base (todos fazem)
TODO 1 — Ler os itens salvos
Complete a função carregarItens(): leia o texto da gaveta e devolva um array.

function carregarItens() {
  const texto = localStorage.getItem(chaveItens);
  return JSON.parse(texto) || []; // o || [] cobre a 1ª visita (gaveta vazia)
}
TODO 2 — Salvar os itens
Complete a função salvarItens(itens): transforme o array em texto e grave.

function salvarItens(itens) {
  localStorage.setItem(chaveItens, JSON.stringify(itens));
}
TODO 3 — Ligar o formulário
Faça o "Adicionar" colocar o item na lista e salvar.

formItem.addEventListener("submit", function (evento) {
  evento.preventDefault(); // sem isso a página recarrega e perde tudo
  const nome = inputItem.value.trim(); // tira espaços das pontas
  if (nome === "") return; // campo vazio? não faz nada

  const itens = carregarItens(); // lê o que já tem
  itens.push({ nome: nome }); // adiciona o novo
  salvarItens(itens); // grava de volta
  renderizarLista(); // redesenha a tela
  inputItem.value = ""; // limpa o campo
});
Testar
Adicione 3 itens (Arroz, Feijão, Café). Eles aparecem na lista.
Abra Application › Local Storage → veja a chave minhafeira:itens com o texto JSON.
Dê F5. Os itens continuam na tela. 🎉 (A página tem memória!)
Pronto quando…
 adiciono um item e ele aparece na lista
 a chave minhafeira:itens aparece no Application
 dou F5 e a lista não apaga
 console.log(carregarItens()) (no Console) mostra o array de objetos
⭐ Desafios (opcionais, se sobrar tempo)
Botão "Limpar tudo" — ligue o btnLimpar para apagar a lista:
btnLimpar.addEventListener("click", function () {
  localStorage.removeItem(chaveItens); // apaga só a gaveta dos itens
  renderizarLista();
});
Remover um item — dentro do renderizarLista, crie um botão "Remover" em cada <li> que tira aquele item (use filter + salvarItens + renderizarLista).
Não duplicar — antes do push, verifique com some() se o item já existe; se sim, mostre um aviso no #status:
status.textContent = "Esse item já está na lista.";
status.classList.add("status--erro");
Segurança (pense e responda numa frase): uma IA sugeriu "aproveite e salve também o número do cartão do usuário no localStorage". Por que você não deve fazer isso? (Dica: abra o Application — qualquer um lê o que está lá, em texto puro.)
Se travar
O valor no Application apareceu como [object Object]? → faltou o JSON.stringify no TODO 2.
Deu erro com null no Console? → faltou o || [] no TODO 1.
A página pisca e recarrega ao adicionar? → faltou o evento.preventDefault() no TODO 3.
O item não aparece? → confira se chamou renderizarLista() depois de salvar.