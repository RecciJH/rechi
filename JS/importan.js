document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");
    const textContent = document.getElementById("textContent");
  
    const texts = [
      "<strong style='color:yellow; text-align:justify;'>Visibilidad constante:</strong> Una página web te permite estar disponible para tus clientes las 24 horas del día, los 7 días de la semana, lo que brinda una presencia constante en línea.",
      "<strong style='color:#B43E8F'>Credibilidad y profesionalismo: </strong> Una página web bien diseñada y actualizada crea una imagen profesional para tu negocio y establece la confianza de tus clientes.",
      "<strong style='color:#FB4D3D'>Exhibición de productos y servicios: </strong>Puedes mostrar tus productos o servicios con imágenes, videos y descripciones detalladas, atrayendo a los clientes potenciales.",
      "<strong style='color:#2DE1C2'>Muchos beneficios más: </strong> En la actualidad, aquellos negocios que carecen de una página web están perdiendo la oportunidad de alcanzar sus objetivos deseados. La presencia en línea se ha vuelto imprescindible para cualquier empresa en el mundo actual. "
    ];
  
    let currentIndex = 0;
  
    function updateTextContent() {
      textContent.innerHTML = texts[currentIndex];
      textContent.classList.add("justify-text");
    }
  
    leftArrow.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + texts.length) % texts.length;
      updateTextContent();
    });
  
    rightArrow.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % texts.length;
      updateTextContent();
    });
  
    // Inicializar con el primer texto
    updateTextContent();
  });
  