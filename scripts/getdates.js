//Viwes

document.addEventListener("DOMContentLoaded", function() {
    // Recupera el contador almacenado en localStorage
    let visits = localStorage.getItem("visits");

    // Si no hay contador, inicializa en 0
    if (visits === null) {
        visits = 0;
    }

    // Incrementa el contador
    visits++;

    // Muestra el contador en algún lugar de la página
    document.getElementById("counterVisits").textContent = "Views: " + visits;

    // Almacena el contador actualizado en localStorage
    localStorage.setItem("views", visits.toString());
});




// Last Modification
document.addEventListener("DOMContentLoaded", function() {
    // Obtén la fecha de la última modificación
    var lastModification = document.lastModified;

    // Formatea la fecha como desees (opcional)
    var formattedDate = new Date(lastModification).toLocaleString();

    // Muestra la fecha en algún lugar de tu página
    var dateElement = document.getElementById("lastModified");
    if (dateElement) {
        dateElement.textContent = "Last modification: " + formattedDate;
    }
});