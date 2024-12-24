const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', e => {
  const currentInputValue = e.currentTarget.value.trim();
  if (currentInputValue === '') {
    return (nameOutput.textContent = 'Anonymus');
  }
  return (nameOutput.textContent = currentInputValue);
});
