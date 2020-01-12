/**
 * Crea una ventana de dos botones
 * @author Juan Manuel González Prófumo
 */

 {
    let enlace, boton;

    let init = function () {
        enlace = document.getElementById("enlace");  
        boton = document.getElementById("empleado");  
        
        enlace.addEventListener("click", crearInforma);  
        boton.addEventListener("click", crearFormulario);  
    }

    let crearInforma = function () {
        let ventana = open("", "De todo un poco", "width=600, height=400");

        let contenido = `<!DOCTYPE html>
                         <html lang="en">
                         <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Juan Manuel González Prófumo</title>
                            <link rel="stylesheet" href="css/estilos.css">
                            <script src="js/deTodoUnPoco.js"></script>
                         </head>
                         <body>
                            <h1>Juan Manuel González Prófumo</h1>
                            <input type="button" value="Informa" id="informa">
                            <input type="button" value="Salir" id="salir">
                            <div id="info"></div>
                         </body>
                         </html>`;

        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();

    }

    let crearFormulario = function () {
      let ventana = open("", "Nuevo empleado", "width=600, height=400");

        let contenido = `<!DOCTYPE html>
                         <html lang="en">
                         <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Juan Manuel González Prófumo</title>
                            <script src="js/Empleado.js"></script>
                            <script src="js/Validar.js"></script>
                         </head>
                         <body>
                           <h1>Juan Manuel González Prófumo</h1>
                           <p><label for="nombre">Nombre del empleado: </label><input type="text" id="nombre"> <span id="errorNombre"></span></p>
                           <p><label for="fecha">Fecha de nacimiento: </label><input type="text" id="fecha"> <span id="errorFecha"></span></p>
                           <p><label for="dni">DNI: </label><input type="text" id="dni"> <span id="errorDni"></span></p>
                           <button id="nuevoEmpleado">Nuevo Empleado</button><br><br>
                         </body>
                         </html>`;

        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();

    }

    document.addEventListener("DOMContentLoaded", init);

 }