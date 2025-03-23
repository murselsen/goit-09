const form = document.querySelector('.feedback-form');

//input event
form.addEventListener('input', event => {
  // console.log(event);

  console.log(form.elements);
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  console.log({
    email: email,
    message: message,
  });
  // feedback-form-state
  // localStorage.setItem('feedback-form-state', JSON.stringify({}));
});

/* form.addEventListener('submit', event => {
  event.preventDefault();
}); */
