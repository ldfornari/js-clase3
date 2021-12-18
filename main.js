// primera parte del desafío
let numero1 = parseInt(prompt("Ingrese un número"));
let acumulador = numero1;

do{
    var numero2 = parseInt(prompt("Ingrese otro número ó 0 (cero) para salir")); // usé var, porque con let no respondía el while

    acumulador = (acumulador + numero2);

    alert("La suma de los números ingresados es: " + acumulador);

}   while (numero2 > 0);
    

// segunda parte del desafío
let nombre = prompt("Ingrese su nombre o ESC para salir");
let orden = 1;

while (nombre != "ESC"){
    
    alert(nombre + " tu número de orden es: " + orden);

    orden = orden + 1;
    
    nombre = prompt("Ingrese su nombre o ESC para salir");

}

// tercera parte del desafío
let num = (prompt("Ingrese un número"));

for (let i = 1; i <= num; i ++){

    alert("Hola " + i + " / " + num);
   
}