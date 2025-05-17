const character = document.getElementById('character');
const mail = document.getElementById('mail');
const form = document.getElementById('contact-form');

const inputs = ['name', 'email', 'message'].map(id => document.getElementById(id));


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const message = inputs[2].value.trim();

  if (!name || !email || !message) {
    character.src = 'assets/confused.png';
    gsap.fromTo(character, { x: -10 }, { x: 10, duration: 0.2, repeat: 3, yoyo: true });
    return;
  }

  // Show lookup expression
character.src = 'assets/lookup.png';

// Animate mail from right to left
mail.style.display = 'block';
mail.style.opacity = '1';
gsap.fromTo(mail,
  { x: 0, y: 0, opacity: 1 },
  { x: -400, y: -30, rotation:-30,opacity: 0, duration: 3.5, ease: "power2.out",
    onComplete: () => {
      mail.style.display = 'none';
      form.reset();
      character.src = 'assets/happy.png';  // back to normal after fly
    }
  }
);
});