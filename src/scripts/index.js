import { initAccordion } from './components/accordion'
import { initMask } from './components/input-mask'

document.querySelectorAll('.accordion')?.forEach((elem) => initAccordion(elem))
document.querySelectorAll('.input-mask')?.forEach((elem) => initMask(elem))
