// sidebar.js
// Função para abrir o sidebar
function w3_open() {
  document.getElementById("sidebar").style.width = "20%";
  document.getElementById("sidebar").style.visibility = "visible";
  document.getElementById("sidebar").style.opacity = "1";
  document.getElementById("sidebar-wrapper").style.visibility = "visible";
  document.getElementById("sidebar-wrapper").style.opacity = "1";
}

// Função para fechar o sidebar
function w3_close() {
  document.getElementById("sidebar").style.width = "0%";
  document.getElementById("sidebar").style.visibility = "hidden";
  document.getElementById("sidebar").style.opacity = "0";
  document.getElementById("sidebar-wrapper").style.visibility = "hidden";
  document.getElementById("sidebar-wrapper").style.opacity = "0";
}

// Carregar o conteúdo do sidebar.html
async function loadSidebar() {
  try {
    const response = await fetch("./sideBar.html"); // Ajuste o caminho conforme necessário
    const sidebarHTML = await response.text();
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;

    // Vincula eventos ao conteúdo carregado
    //document.getElementById('menu').onclick = w3_open;
    document.getElementById('logout-link').onclick = (e) => {
      e.preventDefault();
      logout(); 
    };

    // Fecha o sidebar se clicar fora dele
    document.getElementById('sidebar-wrapper').onclick = (e) => {
      if (!e.target.closest("#sidebar")) {
        w3_close();
      }
    };
  } catch (error) {
    console.error("Erro ao carregar o sidebar:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadSidebar);
