function calcularInversion() {
 capital = parseFloat(document.getElementById("cajaCapitalInicial").value);
 tasa = parseFloat(document.getElementById("cajaTasaInteres").value);
 anios = parseInt(document.getElementById("cajaNumeroAnios").value);

    if (isNaN(capital) || isNaN(tasa) || isNaN(anios) || anios <= 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    let texto = "Año\tInterés\t\tCapital Acumulado\n";
    let acumulado = capital;

    for (let i = 1; i <= anios; i++) {
        let interes = acumulado * (tasa / 100);
        acumulado += interes;

        texto += `${i}\t$${interes.toFixed(2)}\t\t$${acumulado.toFixed(2)}\n`;
    }

    document.getElementById("resultado").value = texto;
}

document.getElementById("calcular").addEventListener("click", calcularInversion);
