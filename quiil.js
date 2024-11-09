function atualizarEnunciado() {
  var enunciadoHTML = quillEnunciado.root.innerHTML;
  document.getElementById('enunciado-text').innerHTML = enunciadoHTML;
}

function returnExercicio(){
  return quillExercicio.getText().trim();
}

var toolbarOptions = [
  [{ 'header': [1, 2, 3, false] }],       // Títulos
  ['bold', 'italic', 'underline'],        // Formatos de texto
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],  // Listas
  ['code-block'],                         // Bloco de código
  ['code'],                                // Texto inline como código

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }]
];

const quillEnunciado = new Quill('#quillEnunciado', {
  theme: 'snow',
  modules: {
    toolbar: '#enunciado-toolbar'
  }
});
// Capturando mudanças no editor e atualizando a div
quillEnunciado.on('text-change', atualizarEnunciado);

const quillExercicio = new Quill('#quillExercicio', {
  theme: 'snow',
  modules: {
    toolbar: false
  }
});

quillExercicio.on('text-change', atualizarSorteableTrash );

document.getElementById('btnSubmit').addEventListener('click', function(event) {
  // var para campos obrigatorios preenchidos
  var enviar = true;

  var area = document.getElementById('area').value;
  var dificuldade = document.getElementById('dificuldade').value;

  if(area === ""){
    document.getElementById('area').style.border = '2px solid red';
    enviar = false;
  }
  else{
    document.getElementById('area').style.border = '';
  }
  
  if (dificuldade === "") {
    document.getElementById('dificuldade').style.border = '2px solid red';
    enviar = false;
  }
  else{
    document.getElementById('dificuldade').style.border = '';
  }

  // Pegando o texto dos editores (sem formatação)
  var enunciadoText = quillEnunciado.getText().trim();
  var exercicioText = quillExercicio.getText().trim();


  // Verificando se o enunciado está vazio
  if (enunciadoText.length === 0) {
    // Foca o editor Quill do enunciado
    quillEnunciado.focus();
    // Adiciona uma borda vermelha para destacar
    document.querySelector('#quillEnunciado').style.border = '2px solid red';
    enviar = false; 
  }
  else{
    document.querySelector('#quillEnunciado').style.border = '';
  }

  
  // Verificando se o exercício está vazio
  if (exercicioText.length === 0) {
    // Foca o editor Quill do exercício
    quillExercicio.focus();
    // Adiciona uma borda vermelha para destacar
    document.querySelector('#quillExercicio').style.border = '2px solid red';
    enviar = false
  }
  else{
    document.querySelector('#quillExercicio').style.border = '';
  }
  
  if(!enviar){
    alert('Preencha os campos obrigatórios!');
    event.preventDefault(); // Evita o envio do formulário
    return;
  }

  
  // Removendo o destaque caso esteja preenchido
  newPuzzle();

});