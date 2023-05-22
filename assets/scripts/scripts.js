var elementText = document.getElementById('my__name');

// Obter o texto completo
var textComplete = elementText.innerText;

// Limpar o conteúdo do elemento
elementText.innerText = '';

// Função para adicionar o texto de forma gradual
function addText(texto, indice) {
  elementText.innerText = textComplete.substring(0, indice);

  // Verificar se o texto ainda não foi totalmente adicionado
  if (indice < textComplete.length) {
    setTimeout(function() {
      addText(texto, indice + 1);
    }, 110); // Tempo entre cada caractere adicionado (ajuste conforme necessário)
  }
}

// Iniciar a adição do texto gradualmente
addText(textComplete, 0);