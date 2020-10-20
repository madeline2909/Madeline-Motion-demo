import $ from "jquery";
import {catBtnTL} from "./btn-animation.js";

export function mouseEvent(){
    $("#cat-btn").on("mouseenter", function () {
        //console.log("mouse enter");
        catBtnTL.play();
    });
    
    $("#cat-btn").on("mouseleave", function () {
        //console.log("mouse leave");
        catBtnTL.reverse();
    });
}