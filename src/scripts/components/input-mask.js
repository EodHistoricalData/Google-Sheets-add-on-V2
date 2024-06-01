import { formatDate, registerCursorTracker } from 'cleave-zen'

export function initMask(elem) {
    const maskType = elem.dataset.mask

    if (maskType === 'date') {
        registerCursorTracker({ input: elem, delimiter: '/' })

        elem.addEventListener('input', (e) => {
            elem.value = formatDate(e.target.value, { datePattern: ['Y', 'm', 'd']})
        })
    }
}
