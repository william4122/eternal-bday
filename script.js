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

// Check Passphrase
function checkPassphrase() {
  const passphraseInput = document.getElementById('passphrase');
  const passphrase = passphraseInput.value;

  // Replace with your logic to validate the passphrase
  if (passphrase === 'your_password') {
    document.getElementById('passphrase-modal').style.display = 'none';
  } else {
    alert('Incorrect passphrase. Try again.');
  }
}

// Display Passphrase Modal on page load
window.onload = function () {
  document.getElementById('passphrase-modal').style.display = 'flex';
};
