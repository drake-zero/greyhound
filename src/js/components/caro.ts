import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from '../caro/CaroArrow.ts'
import { addDotBtnsAndClickHandlers } from '../caro/CaroDots.ts'

if (!customElements.get("embla-carousel")) {
  const OPTIONS: EmblaOptionsType = {}

  class EmblaCarouselComponent extends HTMLElement {
    private emblaApi: any
    private removePrevNextBtnsClickHandlers: () => void
    private removeDotBtnsAndClickHandlers: () => void

    connectedCallback() {
      const emblaNode = <HTMLElement>this.querySelector('.embla')
      const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')
      const prevBtnNode = <HTMLElement>emblaNode.querySelector('.embla__button--prev')
      const nextBtnNode = <HTMLElement>emblaNode.querySelector('.embla__button--next')
      const dotsNode = <HTMLElement>emblaNode.querySelector('.embla__dots')

      this.emblaApi = EmblaCarousel(viewportNode, OPTIONS)

      this.removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
        this.emblaApi,
        prevBtnNode,
        nextBtnNode
      )
      this.removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
        this.emblaApi,
        dotsNode
      )

      this.emblaApi.on('destroy', this.removePrevNextBtnsClickHandlers)
      this.emblaApi.on('destroy', this.removeDotBtnsAndClickHandlers)
    }

    disconnectedCallback() {
      // Clean up when the element is removed
      if (this.emblaApi) {
        this.emblaApi.destroy()
      }
    }
  }

  customElements.define("embla-carousel", EmblaCarouselComponent)
}
