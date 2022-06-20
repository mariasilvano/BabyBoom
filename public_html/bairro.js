const cidade = document.getElementById("cidade");
const CEP = document.getElementById("cep");
const bairro = document.getElementById("bairro");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const cidadeValue = cidade.value;
  const CEPvalue = CEP.value;
  const bairrovalue = bairro.value;

  if (cidadeValue == "") {
    setErrorFor(cidade, "A cidade é obrigatória.");
  } else {
    setSucessFor(cidade);
  }
  if (CEPvalue == "") {
    setErrorFor(CEP, "O CEP é obrigatório.");
  } else {
    setSucessFor(CEP);
  }
  if (bairrovalue == "") {
    setErrorFor(bairro, "O nome do bairro é obrigatório.");
  } else {
    setSucessFor(bairro);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control sucess";
  });

  if (formIsValid) {
    document.getElementById("container-right").style.visibility = "visible";
    document.getElementById("bairrodacreche").placeholder = bairrovalue;
  }
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

const creche = document.getElementById("creche");
const rua = document.getElementById("rua");
const numero = document.getElementById("numero");
const telefone = document.getElementById("telefone");

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs2();
});

function checkInputs2() {
  const crechevalue = creche.value;
  const ruavalue = rua.value;
  const numerovalue = numero.value;
  const telefonevalue = telefone.value;

  if (crechevalue == "") {
    setErrorFor2(creche, "O nome da creche é obriatório.");
  } else {
    setSucessFor2(creche);
  }
  if (ruavalue == "") {
    setErrorFor2(rua, "A rua é obrigatória.");
  } else {
    setSucessFor2(rua);
  }
  if (numerovalue == "") {
    setErrorFor2(numero, "O número é obrigatório.");
  } else {
    setSucessFor2(numero);
  }
  if (telefonevalue == "") {
    setErrorFor2(telefone, "O telefone é obrigatório.");
  } else {
    setSucessFor2(telefone);
  }

  function setErrorFor2(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control2 error";
  }

  function setSucessFor2(input) {
    const formControl = input.parentElement;

    //Adicionar classe de sucesso
    formControl.className = "form-control2 sucess";
  }
}
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
