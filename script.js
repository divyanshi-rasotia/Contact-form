const character = document.getElementById('character');
const mail = document.getElementById('mail');
const form = document.getElementById('contact-form');

const inputs = ['name', 'email', 'message'].map(id => document.getElementById(id));


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const message = inputs[2].value.trim();

  if (!name) {
  character.src = 'assets/confused.png';
  showAlert('Please enter your name');
  return;
}
if (!email) {
  character.src = 'assets/confused.png';
  showAlert('Please enter a valid email');
  return;
}
if (!message) {
  character.src = 'assets/confused.png';
  showAlert('Please enter a message');
  return;
}

  // Show lookup expression
character.src = 'assets/lookup.png';

// Animate mail from right to left
mail.style.display = 'block';
mail.style.opacity = '1';
gsap.fromTo(mail,
  { x: 0, y: 0, opacity: 1 },
  { x: -400, y: -30, rotation:-30,opacity: 0, duration: 2.5, ease: "power2.out",
    onComplete: () => {
      mail.style.display = 'none';
      form.reset();
      character.src = 'assets/happy.png';  // back to normal after fly
      showSuccess();
    }
  }
);
});

function showAlert(message) {
  const alertBox = document.getElementById('popup-alert');
  alertBox.innerText = message;
  alertBox.style.display = 'block';

  // Reset animation
  alertBox.style.animation = 'none';
  alertBox.offsetHeight; // Force reflow
  alertBox.style.animation = null;

  // Hide after animation
  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 4000);
}

function showSuccess() {
  const text = document.getElementById('success-text');
  text.style.transform = 'translate(-50%, -40%) scale(1)';
  text.style.opacity = '1';

  // Restart sparkle animation
  text.classList.remove('sparkle-text');
  void text.offsetWidth;
  text.classList.add('sparkle-text');

  setTimeout(() => {
    text.style.opacity = '0';
    text.style.transform = 'translate(-50%, -40%) scale(0)';
  }, 1800);
}