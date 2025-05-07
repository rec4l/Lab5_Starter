// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const hornAudio = document.querySelector('audio');
  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector('img[alt="Volume level 2"]');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    console.log(selectedHorn);

    if (selectedHorn === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornImage.alt = "Air Horn";
      hornAudio.src = "assets/audio/air-horn.mp3";
    } else if (selectedHorn === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornImage.alt = "Car Horn";
      hornAudio.src = "assets/audio/car-horn.mp3";
    } else if (selectedHorn === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      hornImage.alt = "Party Horn";
      hornAudio.src = "assets/audio/party-horn.mp3";
    } else {
      hornImage.src = "assets/images/no-image.png";
      hornImage.alt = "No image selected";
      hornAudio.src = "";
    }
  });

  volumeControl.addEventListener('input', function() {
    const volumeLevel = volumeControl.value;
    console.log(volumeLevel);

    if (volumeLevel == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (volumeLevel < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volumeLevel < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
    hornAudio.volume = volumeLevel / 100;
  });

  playButton.addEventListener('click', function() {
    if (hornAudio.src) {
      hornAudio.play();
    }

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti({
        emojis: ['🎉', '✨', '🎊'],
        emojiSize: 100,
        confettiNumber: 50,
      });
    }

  });
  hornAudio.addEventListener('ended', function() {
    hornAudio.currentTime = 0;
  });
  

}