const supabaseClient = window.supabase.createClient('https://xnuwcsrvwkreklqqdutr.supabase.co', 'sb_publishable_AGEwrMJ_YWs-C6oFlCQNFg_049iVib-');

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");
    const codigo = document.getElementById("codigo");
    const mensaje = document.getElementById("mensaje");

    if (!formulario || !codigo || !mensaje) {
        console.error("No se encontraron todos los elementos del formulario.");
        return;
    }

    formulario.addEventListener("submit", async function (event) {
        event.preventDefault();

        const valor = codigo.value.trim();

        // 1. Validar que el campo no esté vacío
        if (valor === "") {
            mensaje.textContent = "Introduce un código de demostración.";
            mensaje.style.color = "#fe2c55";
            return;
        }

        try {
            // 2. Enviar los datos a tu tabla en Supabase
            const { error } = await supabaseClient
                .from('Test.n3m0')
                .insert([{ demostración_de_código: valor }]);

            if (error) {
                throw error;
            }

            // 3. Mostrar el mensaje de éxito que esperabas
            mensaje.textContent = "Verificación completada.";
            mensaje.style.color = "#16883e";
            
            // Limpiar el campo de texto
            codigo.value = "";

        } catch (err) {
            console.error("Error al enviar a Supabase:", err);
            mensaje.textContent = "Hubo un error al guardar. Revisa la consola.";
            mensaje.style.color = "#fe2c55";
        }
    });

});
