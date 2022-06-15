const form = document.getElementById("form");
const kidname = document.getElementById("kidname");
const parentname = document.getElementById("parentname");
const rg = document.getElementById("rg");
const endereco = document.getElementById("endereco");
const creche = document.getElementById("creche");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const kidnameValue = kidname.value;
  const parentnameValue = parentname.value;
  const rgValue = rg.value;
  const enderecoeValue = endereco.value;

  if (kidnameValue == "") {
    setErrorFor(kidname, "O nome da criança é obrigatório.");
  } else {
    setSucessFor(kidname);
  }
  if (parentnameValue == "") {
    setErrorFor(parentname, "O nome do responsável é obrigatório.");
  } else {
    setSucessFor(parentname);
  }
  if (rgValue == "") {
    setErrorFor(rg, "O rg da criança é obrigatório.");
  } else {
    setSucessFor(rg);
  }
  if (enderecoeValue == "") {
    setErrorFor(endereco, "O endereço obrigatório.");
  } else {
    setSucessFor(endereco);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;

  //Adicionar classe de sucesso
  formControl.className = "form-control sucess";
}
