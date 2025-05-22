function convertirMetrosKilometros(){
 //variable es un espacio en memoria que sirve para almacenar un valor
  metros = document.getElementById("cajaMetros").value;
  console.log(metros);
  //operacion
  kilometros = metros/1000;
  //carga el valor de la variable a la caja kilometros
  document.getElementById("cajaKilometros").value=kilometros;
  
}