document.addEventListener('DOMContentLoaded', () => {
    fetch('components/home-left-col.html')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            const leftColContainer = document.getElementById('leftCol');
            if (leftColContainer) {
                leftColContainer.innerHTML = data;
            } else {
                console.error("left col container not found in the document.");
            }
        })
        .catch(error => console.error('Error loading left col:', error));
});
