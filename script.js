const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  submitBtn.disabled = true;
  status.textContent = 'sending...';

  try {
    const res = await fetch('https://formsubmit.co/ajax/chinnitechinfo18@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    if (res.ok) {
      status.textContent = "Message sent — we'll get back to you soon.";
      form.reset();
    } else {
      throw new Error('send failed');
    }
  } catch (err) {
    status.textContent = 'Something went wrong. Please try again or email us directly.';
  } finally {
    submitBtn.disabled = false;
  }
});