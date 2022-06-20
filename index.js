let ingresarNombre = (prompt("Ingresar Nombre"));
let cantidadCalificaciones = parseInt (prompt("Ingresar cantidad de calificaciones"))
let sumatoria = 0
let promedio = 0

for (let i = 1; i<=cantidadCalificaciones; i++){
    let calificacion = parseFloat(prompt("Ingresar calificación n°"+ i))
    sumatoria = sumatoria + calificacion
}

promedio = sumatoria / cantidadCalificaciones

alert ("El promedio de "+ ingresarNombre +" es: "+ promedio)
