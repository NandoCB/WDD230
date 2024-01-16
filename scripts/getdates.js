//Menu
document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.getElementById('toggleMenu');
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.getElementById('menuIcon');

    function toggleMenuVisibility() {
        navMenu.classList.toggle('hidden');
        
        menuIcon.src = navMenu.classList.contains('hidden') ? 'images/bars-icon.png' : 'images/cross-icon.png';
    }

    toggleMenu.addEventListener('click', toggleMenuVisibility);

    //Automatically hide menu on page load if width is less than 768px
    if (window.innerWidth < 768) {
        navMenu.classList.add('hidden');
    }

    //Add a resize event to hide the menu when the width is less than 768px
    window.addEventListener('resize', function () {
        if (window.innerWidth < 768) {
            navMenu.classList.add('hidden');
        } else {
            navMenu.classList.remove('hidden');
        }
    });
});






//Viwes

document.addEventListener("DOMContentLoaded", function() {
    
    let visits = localStorage.getItem("visits");

    if (visits === null) {
        visits = 0;
    }
    visits++;

    document.getElementById("counterVisits").textContent = "Page Views: " + visits;

    localStorage.setItem("visits", visits.toString());
});




// Last Modification
document.addEventListener("DOMContentLoaded", function() {
   
    var lastModification = document.lastModified;

    var options = { year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                };

    var formattedDate = new Date(lastModification).toLocaleDateString("en-US", options);

    var dateElement = document.getElementById("lastModified");
    if (dateElement) {
        dateElement.textContent = "Last Modification: " + formattedDate;
    }
});