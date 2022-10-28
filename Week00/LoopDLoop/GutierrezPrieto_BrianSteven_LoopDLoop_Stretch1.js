// Se define la variable distance; que representa la distancia recorrida en km, y la variable speed, que representa la velocidad en km/h.
var distance = 0;
var speed;

// SCondición de no haber recorrido más de 10 km
while (distance < 10) {

    // Condición de estar en una distancia múltiplo de 3 (para entregar el caramelo cada 3 kilómetros), que la distancia sea mayor a 0 (0 es múltiplo de 3, pero ahí no se otorga caramelo), y que la velocidad sea mayor a 9 km/h.
    if (distance % 3 == 0 && distance > 0 && speed > 9) {
        console.log("Has obtenido un caramelo. Distancia recorrida: " + distance + " km. Velocidad actual: " + speed + " km/h.")
    }

    // Se suma 1 km cada vez que se evalúa el ciclo
    distance++;
}