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
        url: "ArrayCard-1/ArrayCard1.html"
    },
    {
        label: "Flex Gallery - CSS",
        url: "FlexPanelGallery/FlexGallery.html"
    },
    {
        label: "Predictive Type Ahead",
        url: "typeAhead/typeAhead.html"
    }
]

document.getElementById('directory').innerHTML = dlink.dynamicLnk(links);