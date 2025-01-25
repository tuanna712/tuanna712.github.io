// document.addEventListener('DOMContentLoaded', () => {
//     fetch('prjNav.html')
//         .then(response => {
//             if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//             return response.text();
//         })
//         .then(data => {
//             const navContainer = document.getElementById('nav');
//             if (navContainer) {
//                 navContainer.innerHTML = data;
//             } else {
//                 console.error("nav container not found in the document.");
//             }
//         })
//         .catch(error => console.error('Error loading nav:', error));
// });



document.addEventListener('DOMContentLoaded', () => {
    // Load the navbar from nav.html
    fetch('prjNav.html')
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
            menuToggle.addEventListener('click', () => {
              navLinks.classList.toggle('show');
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
  