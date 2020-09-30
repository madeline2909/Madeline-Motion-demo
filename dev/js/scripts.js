import {gsap} from "gsap";

import {
    loadingIconRotate
} from './loadingRotate.js';

import {
    textRunning
} from './textRunning.js';

var mainTL = gsap.timeline();

mainTL
.add(loadingIconRotate(), "loadingAnimation")
.add(textRunning(), "loadingAnimation")

        