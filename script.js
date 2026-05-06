history.scrollRestoration = 'manual';

function fixPadding() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
}

fixPadding();
window.addEventListener('resize', fixPadding);