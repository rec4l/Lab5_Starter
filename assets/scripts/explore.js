// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing options

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += ' [default]';
      }
      voiceSelect.appendChild(option);
    });
  }

  // Ensure voices are loaded before populating the dropdown
  speechSynthesis.onvoiceschanged = populateVoices;
  populateVoices();

  speakButton.addEventListener('click', function () {
    const text = textInput.value.trim();
    if (!text) {
      alert('Please enter some text to speak.');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voiceSelect.value;

    const voices = speechSynthesis.getVoices();
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    speechSynthesis.speak(utterance);

    const image = document.querySelector('img');
    image.src = 'assets/images/smiling-open.png';
    image.alt = 'Smiling face with open mouth';
    utterance.onend = function () {
      image.src = 'assets/images/smiling.png';
      image.alt = 'Smiling face with closed mouth';
    };
  });
}