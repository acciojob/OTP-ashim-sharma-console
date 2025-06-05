const inputs = document.querySelectorAll('.code');

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    const value = input.value;

    // Only allow digits
    if (!/^[0-9]$/.test(value)) {
      input.value = '';
      return;
    }

    // Move to next input if current has a digit
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = '';
        }
      } else {
        input.value = '';
      }
    } else if (e.key >= 0 && e.key <= 9) {
      // Allow only digit keys
    } else if (e.key !== 'Tab') {
      e.preventDefault();
    }
  });
});
