  
    function iniciarCarrossel(containerId) {
      const container = document.getElementById(containerId);
      const imagens = container.querySelectorAll("img");
      const anterior = container.querySelector(".anterior");
      const proximo = container.querySelector(".proximo");

      let index = 0;

      function mostrarImagem(i) {
        imagens.forEach((img, idx) => {
          img.classList.remove("ativo");
          if (idx === i) img.classList.add("ativo");
        });
      }

      anterior.onclick = () => {
        index = (index - 1 + imagens.length) % imagens.length;
        mostrarImagem(index);
      };

      proximo.onclick = () => {
        index = (index + 1) % imagens.length;
        mostrarImagem(index);
      };
    }

    iniciarCarrossel("carrossel");
    iniciarCarrossel("carrossel-agenda");
  