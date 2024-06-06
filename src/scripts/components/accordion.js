export function initAccordion(elem) {
    const items = elem.querySelectorAll('.accordion__item')

    function toggleItem(targetItem) {
        targetItem.classList.toggle('-active')
    }

    items.forEach((item) => {
        item
            .querySelector('.accordion__item-head')
            .addEventListener('click', () => toggleItem(item))
    })
}
