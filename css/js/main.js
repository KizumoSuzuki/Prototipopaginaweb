document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
      } else {
        alert("Inicio de sesión exitoso (simulado)");
        window.location.href = "dashboard.html";
      }
    });
  }
});
