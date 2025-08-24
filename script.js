// Personalize with name from URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
if (name) {
  document.getElementById("name").textContent = name;
  document.title = `Happy Birthday, ${name}! 👑`;
}

// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Music player functionality
const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const songInfo = document.getElementById("songInfo");

// Replace with your actual songs
const songs = [
  { title: "Our Song", src: "./music/mann mera.mp3" },
  { title: "Your Favorite Song", src: "./music/kahani suno.mp3" },
  { title: "That Song That Reminds Me of You", src: "./music/smile.mp3" },
];

let currentSong = 0;

function loadSong() {
  audioPlayer.src = songs[currentSong].src;
  songInfo.textContent = `Now playing: ${songs[currentSong].title}`;
}

playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong();
  if (!audioPlayer.paused) audioPlayer.play();
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong();
  if (!audioPlayer.paused) audioPlayer.play();
});

audioPlayer.addEventListener("ended", () => {
  nextBtn.click();
});

// Load first song
loadSong();

// Countdown timer
function updateCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Surprise button
document.getElementById("surpriseBtn").addEventListener("click", function () {
  const surprise = document.getElementById("surprise");
  surprise.classList.toggle("hidden");
  this.innerHTML = surprise.classList.contains("hidden")
    ? '<i class="fas fa-gift"></i> Click for Your Birthday Surprise!'
    : '<i class="fas fa-eye-slash"></i> Hide Surprise';
});

// Confetti button
document.getElementById("confettiBtn").addEventListener("click", function () {
  createConfetti();
});
// Collage Button
document.getElementById("collageBtn").addEventListener("click", function () {
  window.location.href = "./collage/collage.html"; // Redirect to collage page
});

function createConfetti() {
  const colors = ["#ff4081", "#ff758c", "#ff7eb3", "#e91e63", "#9c27b0"];
  const container = document.body;

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 10 + 5 + "px";
    confetti.style.height = Math.random() * 10 + 5 + "px";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Floating hearts background
function createFloatingHearts() {
  const container = document.getElementById("floatingHearts");
  const heartIcons = ["❤", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍"];

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.textContent =
      heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 10 + 10 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(heart);
  }
}

createFloatingHearts();

// Typewriter effect for message
function typeWriter(element, text, speed) {
  let i = 0;
  element.textContent = "";

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// Uncomment to enable typewriter effect on the message
const messageText = document.querySelector(".message p").textContent;
document.querySelector(".message p").textContent = "";
setTimeout(
  () => typeWriter(document.querySelector(".message p"), messageText, 30),
  1000
);
