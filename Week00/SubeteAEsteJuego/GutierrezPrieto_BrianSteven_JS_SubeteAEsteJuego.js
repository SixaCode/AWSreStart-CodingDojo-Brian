// Las variables para este ejercicio son: edad (age) y altura (height). Ambas variables deben ser NÚMEROS.
var age;
var height;

//Se crea una constante temporal, que define la edad mínima para subirse.
const minimumAge = 10;

// Condicional que indica si el usuario puede subirse o no al juego según su altura y su edad.
if (height > 52 || age > minimumAge) {
    console.log("¡Súbete, chico!");
} else {
    console.log("Lo siento, chico. Tal vez el próximo año");
}