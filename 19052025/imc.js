function convertirIMC(){
 //variable es un espacio en memoria que sirve para almacenar un valor
  peso = document.getElementById("cajaPeso").value;
  console.log(peso);
 altura = document.getElementById("cajaAltura").value;
  console.log(altura);

  //operacion
  IMC = peso / (altura * altura);
  //carga el valor de la variable a la caja IMC
  document.getElementById("cajaIMC").value=IMC;
}

