//Viwes

document.addEventListener("DOMContentLoaded", function() {
    
    let visits = localStorage.getItem("visits");

    if (visits === null) {
        visits = 0;
    }
    visits++;

    document.getElementById("counterVisits").textContent = "Views: " + visits;

    localStorage.setItem("visits", visits.toString());
});




// Last Modification
document.addEventListener("DOMContentLoaded", function() {
   
    var lastModification = document.lastModified;

    var formattedDate = new Date(lastModification).toLocaleString();

    var dateElement = document.getElementById("lastModified");
    if (dateElement) {
        dateElement.textContent = "Last modification: " + formattedDate;
    }
});