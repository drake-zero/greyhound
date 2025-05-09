import { gsap } from "gsap";
if (!customElements.get("woof-section")) {
  class Woof extends HTMLElement {
    constructor() {
      super();
      const tl = gsap.timeline();
      console.log("meow-section comp");

      console.log(tl);
    }
  }

  customElements.define("woof-section", Woof);
}
//
