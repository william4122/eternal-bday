document.addEventListener('DOMContentLoaded', function () {
  const modalOverlay = document.getElementById('fullscreen-modal-overlay');

  // Toggle Side Navigation Bar
  function toggleNav() {
// Toggle Side Navigation Bar
function toggleNav() {
  const sideNav = document.getElementById('side-nav');
  if (sideNav.style.left === '0px') {
    sideNav.style.left = '-200px';
  } else {
    sideNav.style.left = '0px';
  }

  // Open Fullscreen Modal
  function openFullScreen(imageSrc, caption) {
    const modal = document.getElementById('fullscreen-modal');
    const image = document.getElementById('fullscreen-image');
    const captionElement = document.getElementById('caption');

    image.src = imageSrc;
    captionElement.innerHTML = caption;
    modal.style.display = 'block';
  }

  // Close Fullscreen Modal
  function closeFullScreen() {
    const modal = document.getElementById('fullscreen-modal');
    modal.style.display = 'none';
  }

  // Open Birthday Year
  function openYear(year) {
    // Add logic to navigate to the selected year
    // For now, we'll just alert the selected year
    alert(`Opening birthday cards for ${year}`);
  }

  // Close modal when overlay (dark background) is clicked
  modalOverlay.addEventListener('click', closeFullScreen);
});

