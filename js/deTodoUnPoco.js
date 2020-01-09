/**
 * Ventana “De todo un poco”
 * Contendrá dos botones: Informa y Salir.
 * Al hacer clic en Informa:
 * • Añadirá un párrafo con el día actual (lunes, martes... miércoles) partiendo de Date().
 * • En función de la hora actual se creará un segundo párrafo que contendrá la hora y los
 * minutos, además de un mensaje informativo:
 * ◦ Si hora > 18:00:
 * ▪ Son las hh:mm. Ya es hora de que dejes de trabajar. Hay que conciliar la vida
 * laboral con la familiar
 * ◦ Si hora < 8:00:
 * ▪ Son las hh:mm. Ya es hora de que comiences a trabajar. Hay que levantar el
 * país.
 * ◦ Si hora entre 8:00 y 18:00:
 * ▪ Son las hh:mm. Pronto llegan las vacaciones. Aguanta
 * Al hacer clic en Salir:
 * • Se cerrará la ventana.
 * 
 * @author Juan Manuel González Prófumo
 */
{
    let informa, salir, info;

    let init = function () {
        informa = document.getElementById("informa");
        salir = document.getElementById("salir");
        info = document.getElementById("info");

        informa.addEventListener('click', verInforma);  
        salir.addEventListener('click', function () {window.close()});  
    }

    let verInforma = function () {
        let fecha = new Date();
        let diaSemana = fecha.getDay();
        let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

        info.innerHTML += "Dia de la semana actual: " + diasSemana[diaSemana];

        let h = ("0" + fecha.getHours()).slice(-2);
        let min = ("0" + fecha.getMinutes()).slice(-2);

        if (h >= 18) {
            info.innerHTML += "<br>Son las " + h + ":" + min + ". Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar<br><br>";
        }

        else if (h <= 8) {
            info.innerHTML += "<br>Son las " + h + ":" + min + ". Ya es hora de que comiences a trabajar. Hay que levantar el país.<br><br>";
        }

        else {
            info.innerHTML += "<br>Son las " + h + ":" + min + ". Pronto llegan las vacaciones. Aguanta<br><br>";
        }

    }

    document.addEventListener("DOMContentLoaded", init);

}