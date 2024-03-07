const navToggle = document.querySelector('.nav__checkbox');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {
    const shadowCast = overlay.getAttribute('data-visible');
    if (shadowCast === 'false') {
        overlay.setAttribute('data-visible', true);
        body.classList.add('hidden')
    } else if (shadowCast === 'true') {
        overlay.setAttribute('data-visible', false);
        body.classList.remove('hidden');
    }
});