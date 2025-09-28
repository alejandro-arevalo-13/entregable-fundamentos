document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const secciones = document.querySelectorAll(".row"); 

  buscador.addEventListener("keyup", () => {
    const texto = buscador.value.toLowerCase();

    secciones.forEach(seccion => {
      const cards = seccion.querySelectorAll(".card");
      const tituloCategoria = seccion.previousElementSibling; 
      let hayCoincidencia = false;

      cards.forEach(card => {
        const titulo = card.querySelector(".card-title").textContent.toLowerCase();

        if (titulo.includes(texto)) {
          card.parentElement.style.display = "block";
          hayCoincidencia = true;
        } else {
          card.parentElement.style.display = "none";
        }
      });

      if (tituloCategoria && tituloCategoria.tagName.startsWith("H")) {
        tituloCategoria.style.display = hayCoincidencia ? "block" : "none";
      }

      seccion.style.display = hayCoincidencia ? "flex" : "none";
    });
  });
});
