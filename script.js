const thumbs = document.querySelectorAll('.thumb');
const previewBoxes = document.querySelectorAll('.preview-box');

// 👉 1. Hover on thumbnail
thumbs.forEach((thumb, index) => {
  const previewId = `preview${index + 1}`;
  const previewBox = document.getElementById(previewId);
  const youtubeId = thumb.getAttribute('data-preview');

  thumb.addEventListener('mouseenter', () => {
    previewBox.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
        style="border-radius: 10px;"
      ></iframe>
    `;
  });

  thumb.addEventListener('mouseleave', () => {
    previewBox.innerHTML = `<p>Click To Show Preview</p>`;
  });
});

// 👉 2. Click on preview-box
previewBoxes.forEach((box, index) => {
  const thumb = thumbs[index];
  const youtubeId = thumb.getAttribute('data-preview');

  box.addEventListener('click', () => {
    box.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
        style="border-radius: 10px;"
      ></iframe>
    `;
  });
});






const form = document.getElementById('contact-form');
const button = document.getElementById('submit-btn');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  button.disabled = true;
  button.textContent = 'Sending...';
  status.textContent = '';
});

