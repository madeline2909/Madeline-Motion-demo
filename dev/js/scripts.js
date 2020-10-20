import {
    gsap
} from "gsap";

//import * as Mouse from "mouse-event.js"
import {catBtnAnimation} from "./btn-animation.js";
import {mouseEvent} from "./mouse-event.js"

const mainTL = gsap.timeline();
mainTL
.add(mouseEvent())
.add(catBtnAnimation());