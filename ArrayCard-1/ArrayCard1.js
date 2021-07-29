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

/**
 * Buttons
 */
const buttons = {
    listInventors: document.getElementById('listInventors'),
    listPeople: document.getElementById('listPeople'),
    listRawData: document.getElementById('listData'),
    // listPeopleTwo: document.getElementById('listPeople2'),
    clear: document.getElementById('clearData'),
    born15hundred: document.getElementById('birth'),
    inventorNames: document.getElementById('firstLastName'),
    birthDate: document.getElementById('sortDate'),
    yearsLived: document.getElementById('sortYearsLived'),
    totalYears: document.getElementById('yearsLived'),
    reverseSort: document.getElementById('sortPeople'),
    sumTrans: document.getElementById('sumUpTrans'),
    greaterNineteen: document.getElementById('someOlder')
}

/**
 * Array Cardio functions
 */
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these

/**
 * Display Functions
 */
function displayList(listName, location) {
    let display = '<ol>';
    for (let i = 0, maxNum = listName.length; i < maxNum; i++) {
        if(typeof listName[i] === 'object') {
            display += '<li>';
            display += listName[i].first + ' ' + listName[i].last + ' birth: '
                + listName[i].year + ', death: ' + listName[i].passed;
            // when sort type is by age, add the age at death
            /* if(listName === byAge) {
                display += '<br>' + ' - Age at death: ' + (listName[i].passed - listName[i].year);
            } */
            display += '</li>';
        } else {
            display += '<li>' + listName[i] + '</li>';
        }
    }
    display += '</ol>';

    document.getElementById(location).innerHTML = display;
}

/**
 * Event listeners for buttons
 */
buttons.listInventors.addEventListener('click', () => displayList(inventors, 'list'));
buttons.listPeople.addEventListener('click', () => displayList(people, 'list'));
buttons.listRawData.addEventListener('click', () => displayList(data, 'list'));
buttons.clear.addEventListener('click', () => {
   document.getElementById('list').innerHTML = '';
});
