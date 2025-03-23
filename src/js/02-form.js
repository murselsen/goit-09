const form = document.querySelector('.feedback-form');

//input event
form.addEventListener('input', event => {
  // console.log(event);

  console.log(form.elements);
  console.log(form.elements.name.value);

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
