// Pegar o input do email e tambem do nome e telefone:
function verificarEmail() {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("numero");       

// Pegar valor digitado e remover espaços em branco
    const nome = nomeInput.value.trim();  
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();     

// Caso não seja digitado nome, email e telefone, disparar alerta! 
if (nome === '' || email === '' || telefone === '') { 
    alert('Por gentileza, preencha todos os campos! \nPlease, complete all fields!');
       

// Caso contrário, exibir a mensagem com o e-mail e limpar o input 
} else {
    alert(`Entraremos em contato através do email: ${email} Obrigad_! \nWe will be in touch by email: ${email} \nThank you!`);
    nomeInput.value = '';
    emailInput.value = '';
    telefoneInput.value = '';
  }
}
