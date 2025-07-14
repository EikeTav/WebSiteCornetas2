document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nome = document.getElementById("ipNome").value;
    const email = document.getElementById("ipEmail").value;
    const mensagem = document.getElementById("taMensagem").value;
    const corrida = document.getElementById("slCorrida").value;
    const motivo = document.getElementById("slMotivo").value;

    
    let resultado = document.getElementById("resultado");
    if (!resultado) {
      resultado = document.createElement("section");
      resultado.id = "resultado";
      resultado.style.marginTop = "2rem";
      resultado.style.backgroundColor = "#f1f1f1";
      resultado.style.padding = "1rem";
      resultado.style.borderRadius = "8px";
      resultado.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
      form.parentNode.appendChild(resultado);
    }

    resultado.innerHTML = `
      <h3>Dados Recebidos:</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
      <p><strong>Objetivo:</strong> ${corrida}</p>
      <p><strong>Motivo do Contato:</strong> ${motivo}</p>
      <p style="margin-top: 1rem;"><em>Você será redirecionado em instantes...</em></p>
    `;

    
    setTimeout(function () {
      window.location.href = "../paginas/resp.html"; 
    }, 4000); 
  });
});
