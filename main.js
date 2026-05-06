onload = () => {
  document.body.classList.remove("container");

  // 🎵 try autoplay (some browsers block until click)
  const music = document.getElementById("bg-music");
  document.body.addEventListener("click", () => {
    music.play();
  });

  // ⌨️ typing effect
  const text = `i won’t pretend i’ve been the man you deserved, because truth is i wasn’t. i played around, made mistakes, and took your patience for granted.

but through all of that, you stayed not because you had to, but because your heart is that genuine.

and now it hits me… out of everyone, it was always you.

the one who saw me at my worst and still chose to care.

i’m not proud of the way i treated you, but i’m grateful you never gave up on me.

if i could rewrite the past, i would, but since i can’t, all i can do is prove to you that i’m ready to be better, not just in words, but in how i treat you every single day.

because you’re not just someone i met… you’re the one i don’t want to lose. 💖`;

  let i = 0;
  const speed = 30;
  const target = document.getElementById("typing-text");

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  setTimeout(typeWriter, 3000); // start after flowers
};
