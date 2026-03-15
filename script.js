const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');

    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
  });
}
const contactForm = document.querySelector('#contact-form');

window.dataLayer = window.dataLayer || [];

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let formSubmitted = false;

  const submitForm = () => {
    if (!formSubmitted) {
      formSubmitted = true;
      contactForm.submit();
    }
  };

  window.dataLayer.push({
    event: 'contact_form_submit',
    form_name: 'contact_form',
    page_location: window.location.href
  });

  setTimeout(submitForm, 300);
});