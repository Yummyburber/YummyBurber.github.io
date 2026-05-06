history.scrollRestoration ='manual';
window.scrollTo(0,0);

function fixPadding() {
const headerHeight = document.querySelector('header').offsetHeight
document.body.style.paddingTop = headerHeight + 'px';
}

fixPadding();
window.addEventListener('resize',fixPadding);