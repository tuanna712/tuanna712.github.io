document.addEventListener('DOMContentLoaded', () => {
    // Load the navbar from nav.html
    fetch('assets/html/nav.html')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            const navContainer = document.getElementById('nav');
            if (navContainer) {
                navContainer.innerHTML = data;

                // Initialize menu toggle functionality after navbar is loaded
                const menuToggle = document.getElementById('menu-toggle');
                const navLinks = document.getElementById('nav-links');

                if (menuToggle && navLinks) {
                    // Toggle menu on click
                    menuToggle.addEventListener('click', (event) => {
                        navLinks.classList.toggle('show');
                        event.stopPropagation(); // Prevent the click from propagating to the document
                    });

                    // Close the menu if clicking outside of it
                    document.addEventListener('click', (event) => {
                        if (navLinks.classList.contains('show') &&
                            !navLinks.contains(event.target) &&
                            !menuToggle.contains(event.target)) {
                            navLinks.classList.remove('show');
                        }
                    });
                } else {
                    console.error('menuToggle or navLinks not found in the loaded nav content.');
                }
            } else {
                console.error('nav container not found in the document.');
            }
        })
        .catch(error => console.error('Error loading nav:', error));
});
