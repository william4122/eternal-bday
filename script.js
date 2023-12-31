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
  { src: 'images/Image.jpg', caption: 'Day1 since Day1 -Willy'},
  { src: 'images/Image1.jpg', caption: 'Nelly happy birthday! I got you a present!'},
  { src: 'images/Image2.jpg', caption: 'A peaceful boat day in DR -Willy' },
  { src: 'images/Image3.jpg', caption: 'OGs' },
  { src: 'images/Image4.jpg', caption: 'Grenade WHISTLE!' },
  { src: 'images/Image5.jpg', caption: 'Hugh & His Bunny <3' },
  { src: 'images/Image6.jpg', caption: 'Chris, I got you a present #Friendsgiving2023' },
  { src: 'images/Image7.jpg', caption: 'Elier took my Hat and she a baddie with her baddie friends' },
  { src: 'images/Image8.jpg', caption: 'Happy Birthday from NYC' },
  { src: 'images/Image10.jpg', caption: 'Summit Stunning' },
  { src: 'images/Image12.jpg', caption: 'Bender doubles with Chris <3' },
  { src: 'images/Image13.jpg', caption: 'OG Badies, #missingAlly&Willy' },
  { src: 'images/Image14.jpg', caption: 'Its a celebration everytime we link up! -Normita ' },
  { src: 'images/Image15.jpg', caption: 'HHN! -Normita' },
  { src: 'images/Image16.jpg', caption: 'Beach Day with the Girlz -Normita' },
  { src: 'images/Image17.jpg', caption: 'Cuzzo time in Denver 2022' },
  { src: 'images/Image18.jpg', caption: 'To more Beach Daze!' },
  { src: 'images/Image19.jpg', caption: 'Since the festy days! Hell yea I cropped him out' },
  { src: 'images/Image20.jpg', caption: 'The Mezcal Calling!' },
  { src: 'images/Image21.jpg', caption: 'Marialena sent us home that day smh' },
  { src: 'images/Image22.jpg', caption: 'Happy Birthday! -Aldo' },
  { src: 'images/Image23.jpg', caption: 'Every night is a girls night #itonlytakes3 -Sam' },
  { src: 'images/Image24.jpg', caption: 'Bunch of cowgirl bishes' },
  { src: 'images/Image25.jpg', caption: 'Again' },
  { src: 'images/Image26.jpg', caption: 'Im baddd' },
  { src: 'images/Image27.jpg', caption: 'When Earls was good!' },
  { src: 'images/Image28.jpg', caption: 'Happy Birthday, Cheef Queen, Te quiero! -Angie' },
  { src: 'images/Image29.jpg', caption: 'Las ninas -sent by angie caption by meh' },
  { src: 'images/Image30.jpg', caption: 'Ashley! So grateful to have gotten close to you, your vibe is unmatched. Cheers to life, to the start of anew age book and kill it like the queen you are. With much love <3 -Dasmi' }
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
