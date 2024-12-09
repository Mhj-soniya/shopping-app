document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    // opens menu when clicking the button
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
        document.body.classList.toggle('no-scroll', navbar.classList.contains('active'));
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.navbar a, .navbar button').forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
});