import {gsap} from "gsap";
import {loadingSpeed} from "./loadingSpeed.js";

export function textRunning() {
    var tl = gsap.timeline();
    tl.set("#running-text",{
        alpha:0
        })
        .to("#running-text", {
            duration: loadingSpeed,
            y:-1000,
            alpha:1,
            repeat: 100
        });
    return tl;
}