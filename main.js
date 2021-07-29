import DynamicLink from "./JS/dynamicLink.js";

const dlink = new DynamicLink();

const links = [
    {
        label: "Drum Kit",
        url: "Javascript-DrumKit/drumKit.html"
    },
    {
        label: "CSS + JS Clock",
        url: "JS+CS-Clock/clock.html"
    },
    {
        label: "CSS - Variables",
        url: "CSS-Variables/CSSVariables.html"
    },
    {
        label: "Array Cardio - One",
        url: "ArrayCar1/ArrayCard1.html"
    }
]

document.getElementById('directory').innerHTML = dlink.dynamicLnk(links);