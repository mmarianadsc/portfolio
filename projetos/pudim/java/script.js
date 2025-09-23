const favoriteIcon = document.getElementById('favorite');
    const uploadInput = document.getElementById('upload');
    const shareIcon = document.getElementById('share');

    favoriteIcon.addEventListener('click', () => {
      if (favoriteIcon.classList.contains('active')) {
        favoriteIcon.classList.remove('active');
        status.textContent = "Você removeu esta receita dos favoritos.";
      } else {
        favoriteIcon.classList.add('active');
        status.textContent = "Você favoritou esta receita!";
      }
    });

    uploadInput.addEventListener('change', (event) => {
      if (event.target.files.length > 0) {
        const fileName = event.target.files[0].name;
        status.textContent = `Você adicionou a foto: ${fileName}`;
      } else {
        status.textContent = "Nenhuma foto foi adicionada.";
      }
    });

    shareIcon.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Receita",
            text: "Confira esta receita incrível!",
            url: window.location.href
          });
          status.textContent = "Receita compartilhada com sucesso!";
        } catch (error) {
          status.textContent = "Falha ao compartilhar a receita.";
        }
      } else {
        status.textContent = "Seu navegador não suporta compartilhamento.";
      }
    });

    const messageBox = document.getElementById('message');
    const sendButton = document.getElementById('sendButton');
    const status = document.getElementById('status');

    sendButton.addEventListener('click', () => {
      const message = messageBox.value.trim();

      if (message) {
        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "green";
        messageBox.value = "";
      } else {
        status.textContent = "Por favor, escreva uma mensagem antes de enviar.";
        status.style.color = "red";
      }
    });

const stars = document.querySelectorAll('.star');
    const result = document.querySelector('.result');
    let selectedRating = 0;

    stars.forEach((star) => {
      star.addEventListener('mouseover', () => {
        resetStars();
        highlightStars(star.dataset.value);
      });

      star.addEventListener('mouseout', () => {
        resetStars();
        if (selectedRating) highlightStars(selectedRating);
      });

      star.addEventListener('click', () => {
        selectedRating = star.dataset.value;
        result.textContent = `Você avaliou com ${selectedRating} estrela${selectedRating > 1 ? 's' : ''}.`;
      });
    });

    function highlightStars(value) {
      stars.forEach((star, index) => {
        if (index < value) star.classList.add('hover');
      });
    }

    function resetStars() {
      stars.forEach((star) => star.classList.remove('hover', 'selected'));
    }