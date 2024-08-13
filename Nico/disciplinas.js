// JavaScript functionality for Disciplinas page
document.querySelectorAll('.sidebar ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar ul li a').forEach(function(otherLink) {
            otherLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.querySelector('.add-discipline').addEventListener('click', function() {
    // Code to add a new discipline
});
