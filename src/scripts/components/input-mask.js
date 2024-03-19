import { formatDate } from 'cleave-zen'

export function initMask(elem) {
    const maskType = elem.dataset.mask

    if (maskType === 'date') {
        elem.addEventListener('input', (e) => {
            elem.value = formatDate(e.target.value, { datePattern: ['d', 'm', 'Y']})
        })
    }
}
