// Inicializa o Tagify no campo de input
var input = document.querySelector('#tags');
var tagify = new Tagify(input, {
  delimiters : ",| ",
  transformTag: transformTag,
});


function tagsString(){
  // Pega as tags como um array de objetos (cada objeto contém a tag e outros metadados)
  var tags = tagify.value; 
  // Converte o array de tags em uma string ou um array de valores simples (apenas as tags)
  var tagsArray = tags.map(tag => tag.value);
/*
  if (tagsArray.length == 0 ){
    return "null";
  }
*/

  var tagsString = tagsArray.join(',');
  return tagsString;
}

function stringToTags(tagsString) {
  if (!tagsString || tagsString === "null") {
    return  // Retorna se a string for "null" ou não existir
  }

  // Divide a string de tags em um array
  var tagsArray = tagsString.split(',');

  // Usa o método addTags para adicionar as tags no Tagify
  tagify.addTags(tagsArray);
}

function transformTag(tagData) {
  // Verifica se a quantidade de tags é par ou ímpar
  tagData.color = '#e9a931'; // Cor laranja
  tagData.bgColor = '#e9a931';
  if (tagify.value.length % 2 != 0) {
    tagData.color = '#339cd1'; // Cor azul
    tagData.bgColor = '#339cd1';
  }
  // Define o estilo personalizado para a tag
  tagData.style = "--tag-bg: " + tagData.bgColor + "; --tag-text-color: white;";

  // Define o background-color diretamente no CSS para a classe da tag
  tagData.style += "background-color: " + tagData.bgColor + ";";
}

function cleanTags(){
  tagify.removeAllTags();
}