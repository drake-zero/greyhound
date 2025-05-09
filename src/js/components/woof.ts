import { gsap } from "gsap";
import { Swiper } from "swiper";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { TextPlugin } from "gsap/TextPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { Flip } from "gsap/Flip";
import { Observer } from "gsap/Observer";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";

gsap.registerPlugin(
  ScrollToPlugin,
  ScrollTrigger,
  ScrollSmoother,
  TextPlugin,
  PhysicsPropsPlugin,
  Physics2DPlugin,
  EaselPlugin,
  CSSRulePlugin,
  CSSPlugin,
  AttrPlugin,
  Draggable,
  InertiaPlugin,
  MorphSVGPlugin,
  DrawSVGPlugin,
  SplitText,
  GSDevTools,
  MotionPathPlugin,
  ScrambleTextPlugin,
  Flip,
  Observer,
  CustomEase,
  CustomBounce,
  CustomWiggle
);

if (!customElements.get("woof-section")) {
  class Woof extends HTMLElement {
    constructor() {
      super();
      const tl = gsap.timeline();

      console.log("meow-section comp");
      console.log(Swiper);


      console.log(tl);
    }
  }

  customElements.define("woof-section", Woof);
}

