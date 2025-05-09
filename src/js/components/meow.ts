import { signal, effect, computed } from "@preact/signals-core";

if (!customElements.get("meow-section")) {
  class Meow extends HTMLElement {
    count = signal(0);
    countDouble = computed(() => { return this.count.value * 2 })
    countDivs: NodeListOf<HTMLDivElement> | undefined;
    doubleDiv: HTMLDivElement | null = null;
    addButton: HTMLButtonElement | null = null;

    constructor() {
      super();

      this.count = signal(0);
      this.countDouble = computed(() => { return this.count.value * 2 })
      this.countDivs;
      this.doubleDiv;
      this.addButton;
    }

    connectedCallback() {
      // Find all .count divs inside this element
      this.countDivs = this.querySelectorAll<HTMLDivElement>('.count');
      // Find the button inside this element
      this.addButton = this.querySelector('button');
      this.doubleDiv = this.querySelector('.double');


      effect(() => {
        this.countDivs?.forEach((div) => {
          div.innerText = `${this.count.value}`
        })
        if (this.doubleDiv) {
          this.doubleDiv.innerText = `${this.countDouble.value}`
        }
      })

      // When the button is clicked, increment the shared signal
      if (this.addButton) {
        this.addButton.addEventListener('click', () => {
          this.count.value++;
        });
      }
    }
  }

  customElements.define("meow-section", Meow);
}


