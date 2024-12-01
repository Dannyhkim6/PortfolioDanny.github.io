document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle Logic
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.src = 'assets/dark-mode.png'; // Change to moon icon
        themeIcon.alt = 'Dark Mode';
    } else {
        themeIcon.src = 'assets/light-mode.png'; // Change to sun icon
        themeIcon.alt = 'Light Mode';
    }
});
