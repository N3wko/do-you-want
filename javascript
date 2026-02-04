const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const zone = document.getElementById("zone");
const result = document.getElementById("result");
const hint = document.getElementById("hint");
const noMessages = [
  "No",
  "Try again",
  "Please try again",
  "Nope",
  "Not this time",
  "Rejected",
  "Request denied",
  "Access denied",
  "Error occurred",
  "Something went wrong",
  "Invalid input",
  "Operation failed",
  "Please don’t reject my proposal",
  "Give it another chance",
  "Almost there",
  "Keep trying",
  "Better luck next time",
  "Oops! Try again",
  "Submission failed",
  "Try once more"
];
let msgIndex = 0;

function moveNoButton() {
  const zoneRect = zone.getBoundingClientRect();
  const maxX = zoneRect.width - noBtn.offsetWidth;
  const maxY = zoneRect.height - noBtn.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  // Change text
  noBtn.textContent = noMessages[msgIndex % noMessages.length];
  msgIndex++;
}
// Mouse hover (desktop)
noBtn.addEventListener("mouseover", moveNoButton);
// Touch / click (mobile)
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
yesBtn.addEventListener("click", () => {
  zone.style.display = "none";
  hint.style.display = "none";
  result.style.display = "block";
  startConfetti();
});
/* ---------- CONFETTI ---------- */
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let confetti = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 360},100%,50%)`
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.r, c.r);
    c.y += 3;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateConfetti);
}
