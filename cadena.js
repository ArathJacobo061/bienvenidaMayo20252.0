function concantenarCadena(){
    nombre=document.getElementById("cajaNombre").value;
    apellidoPaterno=document.getElementById("cajaApellidoPaterno").value;
    apellidoMaterno=document.getElementById("cajaApellidoMaterno").value;
    nombreCompleto=nombre+" "+apellidoPaterno+" "+apellidoMaterno;
    document.getElementById("cajaNombreCompleto").value=nombreCompleto;
}
function calcularLongitud() {
    var texto = document.getElementById("cajaTexto").value;
    var longitud = texto.length;
    document.getElementById("resultado").value = longitud;

}
// Función para convertir a mayúsculas
function convertirMayusculas() {
    var texto = document.getElementById("cajaTexto").value;
    var textoMayusculas = texto.toUpperCase();
    document.getElementById("resultado").value = textoMayusculas;
}

// Función para convertir a minúsculas
function convertirMinusculas() {
    var texto = document.getElementById("cajaTexto").value;
    //var textoMinusculas = texto.toLowerCase();
    document.getElementById("resultado").value = texto.toLowerCase();
}
 function convertirFormato() {
            var dia = document.getElementById("cajaDia").value;
            var mes = document.getElementById("cajaMes").value;
            var anio = document.getElementById("cajaAnio").value;

            var fechaFormateada = dia + "/" + mes + "/" + anio;
            document.getElementById("cajaResultado").value = fechaFormateada;
        }