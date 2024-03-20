export function initSlideToggle(elem) {
    const trigger = elem.querySelector('.slide-toggle__trigger')

    function toggle() {
        elem.classList.toggle('-active')
    }

    trigger.addEventListener('click', toggle)
}
