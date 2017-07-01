
//LECTURA DE OBJETO ESTATICO DE JS 
var auto ={
"modelo":'versa',
"marca":'nissan',
"color":'negro',
"precio":120000
}

var colModelo=document.getElementById("modelo");
colModelo.textContent =auto.modelo;

var colMarca=document.getElementById("marca");
colMarca.textContent = auto.marca;

var colColor=document.getElementById("color");
colColor.textContent= auto.color;

var colPrecio=document.getElementById("precio");
colPrecio.textContent= auto.precio;