// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  // Dropdown: change image and sound
  hornSelect.addEventListener('change', () => {
    const hornType = hornSelect.value;
    hornImage.src = `assets/images/${hornType}.svg`;
    hornImage.alt = `${hornType} image`;
    hornAudio.src = `assets/audio/${hornType}.mp3`;
  });

  // Volume slider: change icon and audio volume
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    let level;
    if (volume == 0) {
      level = 0;
    } else if (volume < 33) {
      level = 1;
    } else if (volume < 67) {
      level = 2;
    } else {
      level = 3;
    }

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // Play sound and show confetti (if party horn)
  playButton.addEventListener('click', () => {
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}