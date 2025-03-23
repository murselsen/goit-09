const form = document.querySelector('.feedback-form');

//input event
form.addEventListener('input', event => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  console.log({
    email: email,
    message: message,
  });
  // feedback-form-state
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email,
      message: message,
    })
  );
});

const formDataLocal = 




/* form.addEventListener('submit', event => {
  event.preventDefault();
}); */
