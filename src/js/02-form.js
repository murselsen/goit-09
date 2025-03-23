const form = document.querySelector('.feedback-form');

//input event
form.addEventListener('input', event => {
  // console.log(event);

  console.log(form.elements);
  const email = form.elements.email.value;
  cons
  // feedback-form-state
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({

    })
  );
});

/* form.addEventListener('submit', event => {
  event.preventDefault();
}); */
