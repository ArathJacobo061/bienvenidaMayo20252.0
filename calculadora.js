function sumar(){
 //variable es un espacio en memoria que sirve para almacenar un valor
  numero1 = parseFloat(document.getElementById("cajaNumero1").value);
  console.log(numero1);
 numero2 = parseFloat(document.getElementById("cajaNumero2").value);
  console.log(numero2);

  //operacion
  resultado = numero1 + numero2;
  document.getElementById("cajaResultado").value = resultado;
}

function restar(){
resultado = numero1 - numero2;
document.getElementById("cajaResultado").value = resultado;

}

function multiplicar(){
resultado = numero1 * numero2;    
document.getElementById("cajaResultado").value = resultado;
}

function dividir(){
resultado = numero1 / numero2; 
document.getElementById("cajaResultado").value = resultado;
}
