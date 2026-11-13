const supabase = supabase.createClient('https://xnuwcsrvwkreklqqdutr.supabase.co', 'sb_publishable_AGEwrMJ_YWs-C6oFlCQNFg_049iVib-');

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");
    const codigo = document.getElementById("codigo");
    const mensaje = document.getElementById("mensaje");

    if (!formulario || !codigo || !mensaje) {
        console.error("No se encontraron todos los elementos del formulario.");
        return;
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const valor = codigo.value.trim();

        if (valor === "") {
            mensaje.textContent = "Introduce un código de demostración.";
            mensaje.style.color = "#fe2c55";
            return;
        }

        mensaje.textContent = mensaje.textContent = "Verificación completada.";
        mensaje.style.color = "#16883e";

        codigo.value = "";
    });

});
