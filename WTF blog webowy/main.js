const firstName = 'Krzysztof';
const age = 39;

console.log (
    `Witaj drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
);

// const heading = document.querySelector(`.header__logo--sentence`);
// heading.innerHTML =`Bóg Honor Ojczyzna ${age}'`;



console.log(firstName);
console.log(age);

console.log(`Cześć, nazywam sie ${firstName} i mam ${age} lat`);

function calculate (myNumber) {
console.log (`Dostałem ${myNumber}`);
myNumber = myNumber * 7;
return myNumber;
}

const myResult = calculate(age);

console.log(age);
console.log(myResult);

function greetOld(age, firstName ) {
    console.log(
        `Witaj drogi odwiedzający, nazywam sie ${firstName} i mam ${age} lat.`
    );
}

greetOld(age, firstName);

const greet = (age, firstName ) => {
    console.log(
        `Ole olek`
    );
}


// Podmienianie treści w html-u!!!

// function createContent(querySelectorContent, content) {
//     const element = document.querySelector(querySelectorContent);
//     element.innerHTML = content;
// }

// createContent(`.header__logo--sentence`, `Bóg Honor Ojczyzna`);
