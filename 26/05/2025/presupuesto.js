function mostrarPresupuestoDistribuido() {
    console.log("Entré a la función");

    ppto = parseInt(document.getElementById("cajaPresupuesto").value);
    noMeses = parseInt(document.getElementById("cajaNoMeses").value);
    pptoMensual = ppto / noMeses;

    text = "";
    // Estructura for
    console.log("NoMeses: " + noMeses);

    for (i = 0; i < noMeses; i++) {
        text = text + "Mes " + (i + 1) + " - Ppto Mensual: " + pptoMensual + 
               " Ppto Acumulado: " + (pptoMensual * (i + 1)) + "\n";
        console.log("El contador es " + i);
    }

    document.getElementById("areaDistribucion").value = text;
}

// Crear una variable en JS que represente el botón
btnDistribucionPpto = document.getElementById("distribuir");
// A esa variable asociar el evento con la función asociada
btnDistribucionPpto.addEventListener("click", mostrarPresupuestoDistribuido);