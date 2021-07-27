import DynamicLink from "./JS/dynamicLink.js";

const dlink = new DynamicLink();

const links = [
    {
        label: "Drum Kit",
        url: "Javascript-DrumKit/drumKit.html"
    }
]

document.getElementById('directory').innerHTML = dlink.dynamicLnk(links);