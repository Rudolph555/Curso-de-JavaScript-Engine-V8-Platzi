//Ejemplo:
function restarDos(num){
    return num-2;
}
function calcular(){
    const sumarTotal = 4+5;
    return restarDos(sumarTotal)
}
debugger;       //En el navegador Inspeccionar-fuentes-fragmentos
calcular();

/* Call Stack: Pila de treas a realizar
En el codigo anterior tenemos la lista de tareas a ejecutar, se apila:
1ro-Global
2do-Funcion calcular
3ro-Funcion restarDos

Se ejecuta:
1ro-Funcion restarDos
2do-Funcion calcular
3ro-Global
*/