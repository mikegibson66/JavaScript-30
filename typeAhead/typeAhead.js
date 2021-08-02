const pageItems = {
    endPoint: 'https://mikegibson66.github.io/JavaScript-30/typeAhead/cities.json',
    cities: [],
    searchInput: document.querySelector('.search'),
    suggestions: document.querySelector('.suggestions')
}

fetch(pageItems.endPoint)
    .then(blob => blob.json())
    .then(data => pageItems.cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // figure out city/state match
        const regx = new RegExp(wordToMatch, 'gi');
        return place.city.match(regx) || place.state.match(regx);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, pageItems.cities);
    pageItems.suggestions.innerHTML = this.value !== '' ? matchArray.map(place => {
        const regx = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regx, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regx, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">Pop: ${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('') : `
        <li>Filter for a city</li>
        <li>or a state</li>
        `;
}

pageItems.searchInput.addEventListener('change', displayMatches);
pageItems.searchInput.addEventListener('keyup', displayMatches);