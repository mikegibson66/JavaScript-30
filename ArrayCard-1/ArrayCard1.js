// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'
];

const boulevardsParis = [
    'Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', "Boulevard de l'Amiral-Bruix",
    'Boulevard Mortier', 'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle',
    'Boulevard de Clichy', 'Boulevard du Crime', "Boulevard du Général-d'Armée-Jean-Simon", 'Boulevard Haussmann',
    "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard Lefebvre', 'Boulevard de la Madeleine',
    'Boulevard de Magenta', 'Boulevard Malesherbes', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard Montmartre',
    'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard Saint-Germain',
    'Boulevard Saint-Michel',  'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Auguste-Blanqui',
    'Boulevard Voltaire', 'Boulevard de la Zone'
]

/**
 * Buttons
 */
const buttons = {
    listInventors: document.getElementById('listInventors'),
    listPeople: document.getElementById('listPeople'),
    listRawData: document.getElementById('listData'),
    // listPeopleTwo: document.getElementById('listPeople2'),
    paris: document.getElementById('parisBoulevard'),
    clear: document.getElementById('clearData'),
    born15hundred: document.getElementById('birth'),
    inventorNames: document.getElementById('firstLastName'),
    birthDate: document.getElementById('sortDate'),
    yearsLived: document.getElementById('sortYearsLived'),
    totalYears: document.getElementById('yearsLived'),
    clearSort: document.getElementById('clearSort'),
    reverseSort: document.getElementById('sortPeople'),
    deStreet: document.getElementById('parisFilter'),
    sumTrans: document.getElementById('sumUpTrans'),
    greaterNineteen: document.getElementById('someOlder'),
    clearReduce: document.getElementById('clearReduce')
}

/**
 * Array Cardio functions
 */
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const justNames = inventors.map(inventor => ({
    first: inventor.first, last: inventor.last
}));
const obKeys = Object.keys(justNames[0]);

const fullNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`))

console.log(obKeys[0]);
console.table(justNames);
console.log(justNames[0][obKeys[0]]);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorByBirth = Array.from(inventors).sort((a, b) => a.year > b.year ? 1 : -1 );
console.table(inventorByBirth);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived (youngest to oldest)
const byAge = Array.from(inventors).sort((a,b)=> {
    if ((a.passed - a.year) > (b.passed - b.year)) {
        return 1;
    } else {
        return -1;
    }
});

console.table(byAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const de = boulevardsParis.filter(streetName => streetName.includes('de'));
console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = Array.from(people).sort((a, b) => {
    const [aLast] = a.split(', ');
    const [bLast] = b.split(', ');
    return aLast > bLast ? 1 : -1;
})
console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const transport = data.reduce((object, item) => {
    if(!object[item]) {
        object[item] = 0;
    }
    object[item]++;
    return object;
}, {})

console.log(typeof transport);
/**
 * Display Functions
 */
function displayList(listName, location) {
    let display = '<ol>';
    for (let i = 0, maxNum = listName.length; i < maxNum; i++) {
        if(typeof listName[i] === 'object') {
            display += '<li>';
            display += listName[i].first + ' ' + listName[i].last + ', birth: '
                + listName[i].year + ', death: ' + listName[i].passed;
            // when sort type is by age, add the age at death
            if(listName === byAge) {
                display += '<br>' + ' - Age at death: ' + (listName[i].passed - listName[i].year);
            }
            display += '</li>';
        } else {
            display += '<li>' + listName[i] + '</li>';
        }
    }
    display += '</ol>';

    document.getElementById(location).innerHTML = display;
}

function displayArray(arrayName, location) {
    let display = '<ol>';
    if(typeof arrayName === 'object'){
        let keys = Object.keys(arrayName);
        for (let k = 0, max = keys.length; k < max ; k++) {
            display += `<li>${keys[k]}: ${arrayName[keys[k]]}</li>`;
        }
    } else {
        for (let i = 0, max = arrayName.length; i < max; i++) {
            if(typeof arrayName[i] === 'object') {
                let keys = Object.keys(arrayName[i]);
                display += '<li>';
                for(let j = 0, maxOb = keys.length; j < maxOb; j++) {
                    display += `${keys[j]}: ${arrayName[i][keys[j]]}`;
                    if(j < maxOb - 1) {
                        display += ', '
                    }
                }
                display += '</li>';
            } else {
                display += '<li>' + arrayName[i] + '</li>';
            }
        }
    }

    display += '</ol>';
    console.log(display);
    document.getElementById(location).innerHTML = display;
}

/**
 * Event listeners for buttons
 */
buttons.listInventors.addEventListener('click', () => displayList(inventors, 'list'));
buttons.listPeople.addEventListener('click', () => displayList(people, 'list'));
buttons.listRawData.addEventListener('click', () => displayList(data, 'list'));
buttons.paris.addEventListener('click', () => displayList(boulevardsParis, 'list'));
buttons.clear.addEventListener('click', () => {
   document.getElementById('list').innerHTML = '';
});
buttons.born15hundred.addEventListener('click', () => displayList(fifteen,'sorted'));
buttons.inventorNames.addEventListener('click', () => displayList(fullNames, 'sorted'));
buttons.birthDate.addEventListener('click', () => displayList(inventorByBirth, 'sorted'));
buttons.yearsLived.addEventListener('click', ()=> displayList(byAge, 'sorted'));
buttons.totalYears.addEventListener('click', () => {
    document.getElementById('sorted').innerHTML = `<ul><li>${totalYears}</li></ul>`;
});
buttons.clearSort.addEventListener('click', () => {
   document.getElementById('sorted').innerHTML = '';
});
buttons.reverseSort.addEventListener('click', () => displayList(alpha, 'sortReduce'));
buttons.deStreet.addEventListener('click', () => displayList(de, 'sortReduce'));
buttons.sumTrans.addEventListener('click', () => displayArray(transport, 'sortReduce'));
buttons.clearReduce.addEventListener('click', () => {
    document.getElementById('sortReduce').innerHTML = '';
});
