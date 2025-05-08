if (!customElements.get('meow-section')) {

  class Meow extends HTMLElement {
    constructor() {
      super()

      console.log('meow-section comp');

    }

  }

  customElements.define('meow-section', Meow)
}
