function createAreaDropdown() {
  const container = document.createElement("div");

  const label = document.createElement("label");
  label.setAttribute("for", "area");
  label.innerText = "Área do exercício:";

  const select = document.createElement("select");
  select.id = "area";
  select.name = "area";
  select.required = true;
  select.className= "custom-select";
  select.innerHTML = `
    <option value="">Selecione a área</option>
    <option value="inputOutput">Entrada e saída</option>
    <option value="condicional">Condicional</option>
    <option value="lacos">Laços de repetição</option>
    <option value="string">Manipulação de strings</option>
    <option value="funcao">Funções</option>
    <option value="arquivo">Manipulação de arquivos</option>
    <option value="lista">Manipulação de Listas</option>
    <option value="ordenacao">Ordenação</option>
    <option value="busca">Busca</option>
    <option value="dicionario">Manipulação de Dicionários</option>
    <option value="matriz">Manipulação de Matrizes</option>
    <option value="recursao">Recursão</option>
  `;

  container.appendChild(label);
  container.appendChild(select);
  return container;
}

function appendAreaDropdown(selector) {
  const target = document.querySelector(selector);
  if (target) {
    target.appendChild(createAreaDropdown());
  }
}
