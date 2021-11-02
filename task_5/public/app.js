/* eslint-disable no-undef */
M.textareaAutoResize(document.querySelector('#json'));

const btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
  const json = document.querySelector('#json').value;
  const search = document.querySelector('#search').value;
  const data = {
    json,
    search,
  };

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      const pathElement = document.querySelector('#path');
      pathElement.classList.remove('scale-out');
      pathElement.innerHTML = result.message;
    });
});
