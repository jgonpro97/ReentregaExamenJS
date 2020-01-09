/**
 * Para la validación se utilizará "Validar.js":
 * • Contendrá tanto las expresiones regulares como sus mensajes de error,
 * • Contendrá también otros métodos típicos de la validación (letra dni, fecha válida).
 * • Extrae la letra del dni y comprueba mediante expresiones regulares.
 * • No contendrá nada de la capa de presentación, ni duplicación de código.
 * @author Juan Manuel González Prófumo
 */
{
    let nombre;
    let fecha
    let dni;
    let errorNombre;
    let errorFecha;
    let errorDni;
    let boton;

    let init = function () {
        nombre = document.getElementById("nombre");
        fecha = document.getElementById("fecha");
        dni = document.getElementById("dni");
        errorNombre = document.getElementById("errorNombre");
        errorFecha = document.getElementById("errorFecha");
        errorDni = document.getElementById("errorDni");
        boton = document.getElementById("nuevoEmpleado");

        nombre.addEventListener("blur", validarNombre);
        fecha.addEventListener("blur", validarFecha);       
        dni.addEventListener("blur", validarDni);

        boton.addEventListener("click", crearEmpleado);

    }

    let validarNombre = function () {
        const regexNombre = /(^[A-ZÁÉÍÓÚ]{1}[a-zñáéíóú])/;

        if (regexNombre.test(nombre.value)) {
            return errorNombre.innerHTML = "";
        }

        else {
            return errorNombre.innerHTML = "No válido";
        }
    }

    let validarFecha = function () {
        const regexFecha = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[/-](0[1-9]|1[0-2])[/-]([0-9]{4})$/;
        
        if (regexFecha.test(fecha.value)) {
            return errorFecha.innerHTML = "";
        }
        
        else{
            return errorFecha.innerHTML = "No Válido";
        }
    }

    let validarDni = function () {
        const regexDNI = /^([0-9]{8})[- ]?([A-Za-z]{1})$/;
        let letrasDni="TRWAGMYFPDXBNJZSQVHLCKET";

        if (regexDNI.test(dni.value)) {
            let numero = regexDNI.exec(dni.value)[1];
            let letra = (regexDNI.exec(dni.value)[2]).toUpperCase();

            if (letra == letrasDni[numero%23]) {
                return errorDni.innerHTML = "";
            }
            
            else{
                return errorDni.innerHTML = "Letra DNI inválida";
            }
            
        }
        
        else{
            return errorDni.innerHTML = "Formato DNI inválido";
        }
    }

    let crearEmpleado = function () {
        let validar = validarNombre() + validarFecha() + validarDni();

        if (validar.length == 0) {
            new Empleado(nombre.value, fecha.value, dni.value);
        }
        
    }

    document.addEventListener("DOMContentLoaded", init);
}