// Se define la variable distance, que representa la distancia recorrida en km.
var distance = 0;

// SCondición de no haber recorrido más de 10 km
while (distance < 10) {

    // Condición de estar en una distancia múltiplo de 3 (para entregar el caramelo cada 3 kilómetros) y que la distancia sea mayor a 0 (0 es múltiplo de 3, pero ahí no se otorga caramelo).
    if (distance % 3 == 0 && distance > 0) {
        console.log("Has obtenido un caramelo. Distancia recorrida: " + distance + " km.")
    }

    // Se suma 1 km cada vez que se evalúa el ciclo
    distance++;
}

/**
 * PREGUNTAS
 * ---------
 * ¿Cómo sabemos que necesitamos un bucle aquí? 
 * R: Cuando nos pide que se brinde un caramelo por cada 3 km recorridos, significa que se debe evaluar constantemente la distancia recorrida (por medio de un bucle) para brindar un caramelo en el momento adecuado.
 * 
 * ¿Cuál es el punto de partida del bucle?
 * R: Línea 5. Inicia con distancia = 0.
 * 
 * ¿Cuándo debe detenerse el bucle?
 * R: Cuando haya llegado a los 10 km de distancia.
 * 
 * ¿Cómo sabrá parar?
 * Por medio de la condición distance < 10.
 * 
 * ¿Cuál es el incremento para cada iteración del bucle?
 * R: Se le suma 1 unidad a distance por cada instancia.
 * 
 * ¿Qué variables necesitamos?
 * R: distancia (en el Stretch 1 también es la velocidad)
 * 
 * IMPORTANTE: el Stretch 1 está en el otro archivo del repositorio.
 */