// FUNÇÃO ENTRAR CRIADA.

function entrar(){

var area = document.getElementById('area');
var texto = prompt('Digite seu nome');

area.innerHTML = 'Bem vindo, ' + texto;
}

// Nessa função, a variável "area", recebe o texto/valor do elemento cujo ID é 'area', no html.
// texto, recebe a string digitada no prompt, que emite a mensagem 'Digite seu nome'.
// area.innerHTML -> puxa o que está contido na var 'area' e exibe dentro do HTML.