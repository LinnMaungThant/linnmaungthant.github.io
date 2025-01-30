document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const elements = [document.body, document.querySelector('.container')];
    const darkModeClass = 'dark-mode';

    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        elements.forEach(el => el?.classList.add(darkModeClass));
    }

    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle(darkModeClass);
        elements[1]?.classList.toggle(darkModeClass); // Toggle .container

        // Save or remove preference
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : '');
    });
});
