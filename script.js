// Select all GIFs, including the one inside the <a> tag
const gifs = document.querySelectorAll('.dropgifs img');

let currentGifIndex = 0;

function showNextGif() {
  // Remove 'active' class from all GIFs
  gifs.forEach((gif) => gif.classList.remove('active'));

  // Handle GIF 2 and GIF 3 displaying simultaneously
  if (currentGifIndex === 1) {
    gifs[1].classList.add('active'); // Show GIF 2
    gifs[2].classList.add('active'); // Show GIF 3

    // Use the duration of the longer GIF
    const duration = Math.max(
      parseInt(gifs[1].getAttribute('data-duration'), 10),
      parseInt(gifs[2].getAttribute('data-duration'), 10)
    );

    // Keep GIF 2 and 3 repeating
    setTimeout(() => {
      currentGifIndex = 1; // Reset to loop GIF 2 and 3
      showNextGif();
    }, duration);
  } else {
    // Show the current GIF (e.g., GIF 1)
    const currentGif = gifs[currentGifIndex];
    currentGif.classList.add('active');

    // Get the duration for the current GIF
    const duration = parseInt(currentGif.getAttribute('data-duration'), 10);

    currentGifIndex++;
    if (currentGifIndex < gifs.length) {
      setTimeout(showNextGif, duration);
    }
  }
}


// Start the sequence
showNextGif();
