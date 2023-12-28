// Toggle Side Navigation Bar
function toggleNav() {
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
  const modalOverlay = document.getElementById('fullscreen-modal-overlay');

  image.src = imageSrc;
  captionElement.innerHTML = caption;
  modal.style.display = 'block';

  // Close modal on overlay click
  modalOverlay.addEventListener('click', closeFullScreen);

  // Swipe down to close modal
  let startY;
  modal.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });

  modal.addEventListener('touchmove', (e) => {
    if (e.touches[0].clientY - startY > 50) {
      closeFullScreen();
    }
  });
}

// Close Fullscreen Modal
function closeFullScreen() {
  const modal = document.getElementById('fullscreen-modal');
  modal.style.display = 'none';
}

// Open Birthday Year
function openYear(year) {
  alert(`Opening birthday cards for ${year}`);
}

document.addEventListener('DOMContentLoaded', function () {
  const scrollableBox = document.getElementById('scrollable-box');

const imageData = [
  { src: 'images/Image1.jpg', caption: 'Chris happy birthday! I got you a present!' },
  { src: 'images/Image2.jpg', caption: 'La rata watching 2' },
  { src: 'images/Image3.jpg', caption: 'NYC pt 3' },
  { src: 'images/Image (10).heic', caption: 'Caption for Image (10)' },
  { src: 'images/Image (11).heic', caption: 'Caption for Image (11)' },
  { src: 'images/Image (12).heic', caption: 'Caption for Image (12)' },
  { src: 'images/Image (2).PNG', caption: 'Caption for Image (2)' },
  { src: 'images/Image (2).heic', caption: 'Caption for Image (2)' },
  { src: 'images/Image (2).jpeg', caption: 'Caption for Image (2)' },
  { src: 'images/Image (2).jpg', caption: 'Caption for Image (2)' },
  { src: 'images/Image (3).HEIC', caption: 'Caption for Image (3)' },
  { src: 'images/Image (4).HEIC', caption: 'Caption for Image (4)' },
  { src: 'images/Image (5).HEIC', caption: 'Caption for Image (5)' },
  { src: 'images/Image (6).HEIC', caption: 'Caption for Image (6)' },
  { src: 'images/Image (7).heic', caption: 'Caption for Image (7)' },
  { src: 'images/Image (8).heic', caption: 'Caption for Image (8)' },
  { src: 'images/Image (9).heic', caption: 'Caption for Image (9)' },
  { src: 'images/Image.JPG', caption: 'Caption for Image' },
  { src: 'images/Image4.jpeg', caption: 'Caption for Image4' },
  { src: 'images/Image5.heic', caption: 'Caption for Image5' },
  { src: 'images/Image6.PNG', caption: 'Caption for Image6' },
  // Add more objects for additional images
];

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
