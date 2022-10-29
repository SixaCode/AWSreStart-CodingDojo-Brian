/**
 * La función saluda, recibiendo 2 parámetros: name (nombre) y time (hora). Tiene un saludo especial para el Conde Dooku.
 * 
 * @param {Nombre de la persona} name 
 * @param {Hora en cualquier formato legible} time 
 */

function greet(name, time) {
    if (name == "Count Dooku") {
        console.log("¡Voy por ti, Dooku!");
    } else {
        console.log("¡Buen día, " + name + "! Son las " + time);
    }
}