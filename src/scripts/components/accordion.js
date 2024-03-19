export function initAccordion(elem) {
    const items = elem.querySelectorAll('.accordion__item')

    function toggleItem(targetItem) {
        items.forEach((item) => {
            const method = (item === targetItem) ? 'toggle' : 'remove'
            item.classList[method]('-active')
        })
    }

    items.forEach((item) => {
        item
            .querySelector('.accordion__item-head')
            .addEventListener('click', () => toggleItem(item))
    })
}
