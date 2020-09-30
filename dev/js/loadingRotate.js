import {gsap} from "gsap";
import {loadingSpeed} from "./loadingSpeed.js";

export function loadingIconRotate() {
    var tl = gsap.timeline();
    tl  .from("#loading", {
            duration: loadingSpeed,
            scale: 8
        })
        .to("#loading",{
            borderRadius:"80px"
        },"-=1")
        .to("#loading", {
            duration: loadingSpeed,
            rotate: 360,
            repeat: 100
        });
    return tl;
}