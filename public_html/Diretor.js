var form = document.getElementById("form");
var inserir = document.getElementById("inserir");
var select = document.getElementById("creche");
var executou = false;
var selected_option = select.options[select.selectedIndex].text;

function CriarCampos() {
  if (executou == false && select.selectedIndex >= 0) {
    createLabelandInput();
    executou = true;
  }
}
function createLabelandInput() {
  var elemento1 = document.createElement("label");

  elemento1.setAttribute("for", "Turma");
  elemento1.textContent = "Turma:";
  inserir.appendChild(elemento1);

  var elemento2 = document.createElement("input");
  elemento2.setAttribute("type", "text");
  elemento2.setAttribute("id", "vagas");
  elemento2.textContent = "Vagas:";
  inserir.appendChild(elemento2);

  var elemento3 = document.createElement("label");
  elemento3.setAttribute("for", "Vagar");
  elemento3.textContent = "Vagas:";
  inserir.appendChild(elemento3);

  var elemento4 = document.createElement("input");
  elemento4.setAttribute("type", "number");
  elemento4.setAttribute("value", "10");
  elemento4.setAttribute("min", "10");
  elemento4.setAttribute("max", "20");
  elemento4.setAttribute("step", "1");
  elemento4.setAttribute("id", "vagas");
  elemento4.textContent = "Vagas:";
  inserir.appendChild(elemento4);
}
