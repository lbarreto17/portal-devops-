
 resposta.textContent = Obrigado pelo contato, ${nome}!;
const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");

// Scroll suave até a seção de serviços
botaoDestaque.addEventListener("click", () => {
  servicos.scrollIntoView({ behavior: "smooth" });
});

// Validação do formulário de contato
formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nomeInput = document.querySelector("#nome");
  const emailInput = document.querySelector("#email"); // ajuste o id se for diferente
  const nome = nomeInput.value.trim();
  const email = emailInput ? emailInput.value.trim() : null;

  // Validação: nome não pode estar vazio
  if (nome === "") {
    resposta.textContent = "Por favor, preencha seu nome.";
    resposta.style.color = "red";
    return;
  }

  // Validação: e-mail com formato básico correto (se o campo existir)
  if (email !== null) {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      resposta.textContent = "Por favor, insira um e-mail válido.";
      resposta.style.color = "red";
      return;
    }
  }

  // Se passou nas validações
  resposta.style.color = "green";
  resposta.textContent = `Obrigado pelo contato, ${nome}!`;
  formContato.reset();
});

// Funcionalidade do botão de serviços (cards)
const botoesServico = document.querySelectorAll(".botao-servico");

botoesServico.forEach((botao) => {
  botao.addEventListener("click", (evento) => {
    const nomeServico = evento.target.dataset.servico;
    alert(`Você selecionou o serviço: ${nomeServico}`);
    // depois pode trocar esse alert por redirecionamento,
    // ex: window.location.href = `servicos/${nomeServico}.html`;
  });
});
