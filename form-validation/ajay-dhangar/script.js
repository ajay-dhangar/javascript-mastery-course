document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      validateForm();
  });

  function validateForm() {
      let isValid = true;

      if (name.value.trim() === '') {
          showError(name, 'Name is required');
          isValid = false;
      } else {
          showSuccess(name);
      }

      if (!isValidEmail(email.value.trim())) {
          showError(email, 'Email is not valid');
          isValid = false;
      } else {
          showSuccess(email);
      }

      if (password.value.trim().length < 8) {
          showError(password, 'Password must be at least 8 characters');
          isValid = false;
      } else {
          showSuccess(password);
      }

      if (confirmPassword.value.trim() !== password.value.trim()) {
          showError(confirmPassword, 'Passwords do not match');
          isValid = false;
      } else {
          showSuccess(confirmPassword);
      }

      if (isValid) {
          alert('Form submitted successfully!');
      }
  }

  function showError(input, message) {
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector('.error-message');
      errorMessage.innerText = message;
      errorMessage.style.display = 'block';
      input.classList.add('invalid');
  }

  function showSuccess(input) {
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector('.error-message');
      errorMessage.innerText = '';
      errorMessage.style.display = 'none';
      input.classList.remove('invalid');
  }

  function isValidEmail(email) {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }
});
