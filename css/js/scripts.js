// Menu hambúrguer responsivo
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("main-nav").classList.toggle("active");
});

// Feedback visual no formulário (cadastro.html)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const alertBox = document.querySelector(".alert");
  const toastBox = document.querySelector(".toast");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simula validação simples
      const inputs = form.querySelectorAll("input, select");
      let valid = true;

      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          valid = false;
        }
      });

      if (!valid) {
        alertBox.style.display = "block";
        toastBox.style.display = "none";
      } else {
        alertBox.style.display = "none";
        toastBox.style.display = "block";

        // Oculta o toast após 3 segundos
        setTimeout(() => {
          toastBox.style.display = "none";
        }, 3000);

        form.reset();
      }
    });
  }
});
