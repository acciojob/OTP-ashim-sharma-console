const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        e.preventDefault(); // prevent default backspace behavior
        if (input.value === '') {
          // Move focus to previous input if exists
          if (index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = '';
          }
        } else {
          // Clear current input if it has a value
          input.value = '';
        }
      } else if (e.key.match(/^[0-9]$/)) {
        // Allow numeric input only
        input.value = ''; // Clear the input before setting new value (to handle overwrite)
      } else if (e.key === 'ArrowLeft') {
        if (index > 0) inputs[index - 1].focus();
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        if (index < inputs.length - 1) inputs[index + 1].focus();
        e.preventDefault();
      } else if (e.key.length === 1) {
        // Prevent other non-digit characters
        e.preventDefault();
      }
    });

    input.addEventListener('input', (e) => {
      const value = input.value;
      // Only digits allowed, clear otherwise
      if (!value.match(/^\d$/)) {
        input.value = '';
        return;
      }
      // Move focus to next input if available
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    // Optional: on focus select all for easier editing
    input.addEventListener('focus', e => e.target.select());
  });

  // Autofocus on the first input on page load
  inputs[0].focus();