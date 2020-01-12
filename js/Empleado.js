/**
 * Formulario Empleado
 * En el formulario, cada control tendrá su propio span de error, que se rellenará en rojo.
 * Al pulsarse el botón “nuevo Empleado” del formulario se validará todo el formulario y sólo en
 * ese caso se creará el nuevo Empleado.
 * Los controles del formulario son:
 * 1. Nombre del Empleado: Anacleto Ramírez, Rigoberta López Castañuela
 * 2. Fecha de nacimiento: 14/01/1993, 01-01-2001, pero NO 29/02/2015.
 * 3. DNI: 12345678Z, 12345678z, 12345678-Z ó 12345678 Z
 * 4. TODOS Se validarán al perder el foco
 * Atento en la validación: evita la duplicación de invocación en la medida de lo posible.
 * Para la validación se utilizará "Validar.js":
 * • Contendrá tanto las expresiones regulares como sus mensajes de error,
 * • Contendrá también otros métodos típicos de la validación (letra dni, fecha válida).
 * • Extrae la letra del dni y comprueba mediante expresiones regulares.
 * • No contendrá nada de la capa de presentación, ni duplicación de código.
 * Cada clic en el botón de nuevo Empleado:
 * 1. Se validarán todos los controles y se actualizarán los span de error
 * 2. En caso de estar todo correcto:
 * 1. Se creará un objeto nuevo. Para ello, mediante prototype, crea una clase
 * Empleado con sus atributos y el método crearNuevaVentana. Mostrará los
 * atributos. Prohibido usar la palabra reservada class.
 * 2. Se borrará la información del empleado en los controles.
 * 
 * @author Juan Manuel González Prófumo
 */

{

    function Empleado(nombre, fNac,dni){
        this.nombre = nombre;
        this.fNac = fNac;
        this.dni = dni;
        this.crearNuevaVentana();
    }

    Empleado.prototype.crearNuevaVentana = function () {
        let ventana = open("", "Empleado", "width=600, height=400");

        let contenido = `<!DOCTYPE html>
                        <html lang="en">
                        
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Juan Manuel González Prófumo</title>
                        </head>
                        <body>
                            <h1>Juan Manuel González Prófumo</h1>
                            <ul>
                                <li>Nombre: ${this.nombre}</li>
                                <li>Fecha de nacimiento: ${this.fNac}</li>
                                <li>DNI: ${this.dni}</li>
                            </ul>
                        </body>
                        
                        </html>`;

        ventana.document.write(contenido);

        ventana.document.close();
    }

}