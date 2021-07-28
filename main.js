import DynamicLink from "./JS/dynamicLink.js";

const dlink = new DynamicLink();

const links = [
    {
        label: "Drum Kit",
        url: "Javascript-DrumKit/drumKit.html"
    },
    {
        label: "CSS + JS Clock",
        url: "JS+CS- Clock"
    }
]

document.getElementById('directory').innerHTML = dlink.dynamicLnk(links);