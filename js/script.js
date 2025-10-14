function showYear() {
  const footer = document.querySelector('footer p');
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Diana | Portfolio`;
}
showYear();



function highlightButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.background = '#8fa8d3ff';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = '#5496d7ff';
    });
  });
}
highlightButtons();


function validateForm() {
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Пожалуйста, заполните все поля.");
    } else {
      alert("Сообщение отправлено!");
    }
  });
}
validateForm();



function scrollToTop() {
  const btn = document.createElement('button');
  btn.textContent = " Наверх";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px 15px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.background = "#778ba7ff";
  btn.style.cursor = "pointer";
  btn.style.display = "none";
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 1000 ? "block" : "none";
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
scrollToTop();


