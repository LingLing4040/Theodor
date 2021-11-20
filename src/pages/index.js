import './index.css';

let aboutOffset = document.querySelector('.about');

const buttonUp = document.querySelector('.button-up');

buttonUp.addEventListener('click', () => {
    window.scrollTo(pageYOffset, 0);
});

document.addEventListener('scroll', function () {
    let scrollY = window.pageYOffset;

    if (scrollY >= aboutOffset.offsetTop) {
        buttonUp.classList.add('button-up_active');
    }

    if (scrollY <= aboutOffset.offsetTop) {
        buttonUp.classList.remove('button-up_active');
    }
});
