// JavaScript functionality for Horario page
document.querySelector('.add-schedule').addEventListener('click', function() {
    // Code to add a new schedule
});

document.querySelectorAll('.sidebar ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar ul li a').forEach(function(otherLink) {
            otherLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});
