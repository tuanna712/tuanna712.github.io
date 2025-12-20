function toggleContent(contentId, button) {
    const content = document.getElementById(contentId);

    // Hide other open sections
    document.querySelectorAll('.expandable-content').forEach(section => {
      if (section.id !== contentId) section.style.display = 'none';
    });

    // Remove active state from all buttons
    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));

    // Toggle current section and button state
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
      button.classList.add('active');
    }
  }