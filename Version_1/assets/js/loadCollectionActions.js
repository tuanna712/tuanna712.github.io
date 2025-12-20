document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const gridImages = document.querySelectorAll('.grid-image');
    const overlay = document.getElementById('overlay');
    const expandedImage = document.getElementById('expandedImage');
    const imageDescription = document.getElementById('imageDescription');
    const closeBtn = document.getElementById('closeBtn');
  
    // Function to show the overlay with the clicked image
    gridImages.forEach((image) => {
      image.addEventListener('click', () => {
        overlay.style.display = 'flex';
        expandedImage.src = image.src;
        imageDescription.textContent = image.getAttribute('data-description') || '';
      });
    });
  
    // Function to close the overlay
    const closeOverlay = () => {
      overlay.style.display = 'none';
      expandedImage.src = '';
      imageDescription.textContent = '';
    };
  
    // Close overlay when the close button is clicked
    closeBtn.addEventListener('click', closeOverlay);
  
    // Close overlay when clicking outside the expanded image
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay || event.target === imgDisp) {
        closeOverlay();
      }
    });
  
    // Close overlay when the ESC key is pressed
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        closeOverlay();
      }
    });
  });
  