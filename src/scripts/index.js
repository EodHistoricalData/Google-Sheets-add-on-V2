import { initAccordion } from './components/accordion'
import { initMask } from './components/input-mask'
import { initSlideToggle } from './components/slide-toggle'

document.querySelectorAll('.accordion')?.forEach((elem) => initAccordion(elem))
document.querySelectorAll('.input-mask')?.forEach((elem) => initMask(elem))
document.querySelectorAll('.slide-toggle')?.forEach((elem) => initSlideToggle(elem))
