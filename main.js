// 🎵 play music
function playMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}

// ✍️ typing effect
const text = `i won’t pretend i’ve been the man you deserved...

but through everything, you stayed.

and now i realise… it was always you. 💖`;

let i = 0;
const speed = 40;
const target = document.getElementById("typing-text");

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  typeWriter();
};
