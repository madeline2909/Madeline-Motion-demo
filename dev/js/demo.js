import {
    gsap
} from "gsap";


//TweenMax.to(".red-box",2,{x: 500, borderRadius: "50px" });
//TweenLite.to(".red-box",2,{x: 500, borderRadius: "50px" });

var catHorizontalSpeed = 1.5;
var loadingPopUpSpeed = 0.5;
var loadingRotateSpeed = 2.5;
var runningTextSpeed = 5;

gsap.set("#loading",{
    transformOrigin: "center center"
})
gsap.set("#cat",{
    transformOrigin: "center center"
})
gsap.set("#running-text",{
    alpha:0
})

// gsap call / what do you want to animate / how long should it animate / what should change?
gsap.from("#cat", {
    duration: catHorizontalSpeed,
    scale: 2,
    x: -600
});

gsap.from("#loading", {
    duration: loadingPopUpSpeed,
    alpha:0,
    scale: 0.5,
    delay: catHorizontalSpeed
});

gsap.to("#cat-animation", {
    duration: loadingRotateSpeed,
    rotate: 360,
    repeat: 100,
    delay: loadingRotateSpeed
});

gsap.to("#running-text", {
    duration: runningTextSpeed,
    y:-1000,
    alpha:1,
    repeat: 100,
    delay: loadingRotateSpeed
});