// Toggle Side Navigation Bar
function toggleNav() {
  // Your toggleNav function code
const sideNav = document.getElementById('side-nav');
  if (sideNav.style.left === '0px') {
    sideNav.style.left = '-200px';
  } else {
    sideNav.style.left = '0px';
  }
}
// Open Fullscreen Modal
function openFullScreen(imageSrc, caption) {
  const modal = document.getElementById('fullscreen-modal');
  const image = document.getElementById('fullscreen-image');
  const captionElement = document.getElementById('caption');
  const modalOverlay = document.getElementById('fullscreen-modal-overlay'); // Add this line

  image.src = imageSrc;
  captionElement.innerHTML = caption;
  modal.style.display = 'block';

  // Close modal when overlay (dark background) is clicked
  modalOverlay.addEventListener('click', closeFullScreen);
}

// Close Fullscreen Modal
function closeFullScreen(event) {
  const modal = document.getElementById('fullscreen-modal');
  modal.style.display = 'none';
}

// Open Birthday Year
function openYear(year) {
  // Add logic to navigate to the selected year
  // For now, we'll just alert the selected year
  alert(`Opening birthday cards for ${year}`);
}
document.addEventListener('DOMContentLoaded', function () {
  const scrollableBox = document.getElementById('scrollable-box');

  // Sample data for images and captions
  const imageData = [
    { src: 'images/Image1.jpg', caption: 'Chris happy birthday! I got you a present!' },
    { src: 'images/Image2.jpg', caption: 'La rata watching 2' },
    { src: 'images/Image3.jpg', caption: 'NYC pt 3' },
    // Add more objects for additional images
  ];

  // Dynamically create sub-boxes
  imageData.forEach((data, index) => {
    const subBox = document.createElement('div');
    subBox.classList.add('sub-box');
    subBox.onclick = () => openFullScreen(data.src, data.caption);

    const img = document.createElement('img');
    img.src = data.src;
    img.alt = `Image ${index + 1}`;

    subBox.appendChild(img);
    scrollableBox.appendChild(subBox);
  });
});

