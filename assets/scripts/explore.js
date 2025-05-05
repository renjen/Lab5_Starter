// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    // Avoid duplicate options
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  // Try populating once in case voices are already loaded
  populateVoices();

  // Also listen for the voiceschanged event
  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = populateVoices;
  }

  // Fallback: populate again after a short delay
  setTimeout(() => {
    if (voiceSelect.length <= 1) populateVoices();
  }, 500);

  talkButton.addEventListener('click', () => {
    const text = textInput.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceName = voiceSelect.value;
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    faceImage.src = 'assets/images/smiling-open.png';
    synth.speak(utterance);

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  });
}