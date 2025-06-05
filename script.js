
const inputs = document.querySelectorAll('.code');


inputs.forEach((input, index) => {
  
  input.addEventListener('input', (e) => {
    const value = e.target.value;

  
    if (value.match(/[0-9]/)) {
      
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
     
      input.value = '';
    }
  });


  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    }
  });

 
  if (index === 0) {
    input.focus();
  }
});
