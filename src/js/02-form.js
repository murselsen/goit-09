const form = document.querySelector('.feedback-form');

//input event
form.addEventListener('input', event => {
  // console.log(event);

  console.log(form.elements);


  const inputValue = event.target.value.trim();
  const inputName = event.target.name;
  // feedback-form-state
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      [inputName]: inputValue,
    })
  );
});

/* form.addEventListener('submit', event => {
  event.preventDefault();
}); */
