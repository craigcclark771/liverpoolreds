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

if (contactForm && typeof gtag === 'function') {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let formSubmitted = false;

    const submitForm = () => {
      if (!formSubmitted) {
        formSubmitted = true;
        contactForm.submit();
      }
    };

    gtag('event', 'contact_form_submit', {
      form_name: 'contact_form',
      page_location: window.location.href,
      event_callback: submitForm
    });

    // Fallback in case callback doesn't fire quickly
    setTimeout(submitForm, 1000);
  });
}