function createDificuldadeDropdown() {
  const container = document.createElement("div");

  const label = document.createElement("label");
  label.setAttribute("for", "dificuldade");
  label.innerText = "Dificuldade do exercício:";

  const select = document.createElement("select");
  select.id = "dificuldade";
  select.name = "dificuldade";
  select.required = true;
  select.className= "custom-select";
  select.innerHTML = `
    <option value="">Selecione dificuldade</option>
    <option value="0">Muito fácil</option>
    <option value="1">Fácil</option>
    <option value="2">Médio</option>
    <option value="3">Difícil</option>
    <option value="4">Muito difícil</option>
  `;

  container.appendChild(label);
  container.appendChild(select);
  return container;
}

function appendDificuldadeDropdown(selector) {
  const target = document.querySelector(selector);
  if (target) {
    target.appendChild(createDificuldadeDropdown());
  }
}
