import { gsap } from "gsap";

if (!customElements.get("meow-section")) {
  class Meow extends HTMLElement {
    constructor() {
      super();
      this.init();
    }

    init() {
      console.log("Initializing meow-section...");
      const tl = gsap.timeline();
      console.log("Timeline created:", tl);

      const mow = document.querySelector(".bg-amber-300");
      console.log("Element found:", mow);
      if (mow) {
      } else {
        console.warn("Element .bg-amber-300 not found.");
      }
    }
  }

  customElements.define("meow-section", Meow);
}
