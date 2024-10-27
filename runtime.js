//Synchronous
console.log("taco 1");
console.log("taco 2");
console.log("Torta");
console.log("taco 3");

/*Salida:
    taco 1
    taco 2
    Torta
    taco 3
El proceso de ejecución de JavaScript es Sincrono (Synchronous), hace una cosa a la ves y si hay un proceso que requiere más tiempo digamos console.log("Torta"), deja de hacer todo hasta terminar esa tarea y recien hace la siguiente tarea
*/

//Asynchronous
console.log("taco 1");
console.log("taco 2");
console.log("taco 3")
setTimeout(()=>{            //esta función es del navegador (Web Api)
    console.log("Torta");
}, 500);
console.log("taco 4");
/*Salida:
    taco 1
    taco 2
    taco 3
    taco 4
    undefined
    Torta

JavaScript toma las tareas y las ejecuta de forma sincrona pero cuando encuentra una tarea q no le pertenece como el setTimeout que es una WebApi se la pasa y cuando el navegador la termina de ejecutar lo pone en un Callback esperando que JS termina las tareas que tiene almacenadas en su Call Stack cuando el Event Loop verifica que esta vacio entonces se ejecuta lo que estaba en el Call, por lo que aunque el setTimeout este en 0, igual sigue este proceso y es así como puede existir Asincronismo.
*/
