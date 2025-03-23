const form = document.querySelector('.feedback-form');

//input event
form.addEventListener('input', event => {
  console.log(event);
  const inputValue = event.target.value.trim();

  // feedback-form-state
  localStorage.setItem('feedback-form-state');
});

form.addEventListener('submit', event => {
  event.preventDefault();
});
