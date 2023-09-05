function enviarCotizacion() {
    // Envía el formulario
    document.querySelector("form").submit();
    
    // Muestra el popup
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
}
