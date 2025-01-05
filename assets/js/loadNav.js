document.addEventListener('DOMContentLoaded', () => {
    fetch('components/nav.html')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            const navContainer = document.getElementById('nav');
            if (navContainer) {
                navContainer.innerHTML = data;
            } else {
                console.error("nav container not found in the document.");
            }
        })
        .catch(error => console.error('Error loading nav:', error));
});
