document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Error message containers
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let valid = true;

  // Validate name
  if (name === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  // Validate email with regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  // Validate message
  if (message === '') {
    messageError.textContent = 'Message is required.';
    valid = false;
  }

  // Show success if valid
  if (valid) {
    successMessage.textContent = 'Thank you! Your message has been received.';
    // Optionally clear form
    document.getElementById('contactForm').reset();
  }
});
