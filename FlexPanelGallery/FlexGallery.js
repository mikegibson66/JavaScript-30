const pageItems = {
    panel: document.querySelectorAll('.panel')
}

function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

pageItems.panel.forEach(panel => panel.addEventListener('click', toggleOpen));
pageItems.panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));