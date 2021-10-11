/*  DevTools: Rechtsklick im Browser auf Webseite -> Untersuchen
    In den Tabs zu "Console" navigieren 
 */

let name = 'Sarah';     // alles in Hochkomma wird als String gespeichert
let age = '1';          // typeof age -> string
let number = 1;
let option = true;
let height;             // typeof height -> undefined
let eyecolor = null;
const pi = 3.14;        // eine neue zuweisung: pi=3.12 würde einen Fehler werfen (TypeError: Assignment to constant variable)
console.log('Hello World!');
console.log(pi);

// ARRAYS
let shopping=[];        
let numbers=[];
let mix=[];
shopping = ['Appel', 'Banana', 'milk'];
numbers=[4,6,1,9,7,3];
numbers.push(6);
mix=['one', 1, 'two', 2];   // Array with mixed Datatypes
console.log(numbers[0]+numbers[3]);
console.log(numbers.sort());

// OBJECTS
let mensch={
    lastname: 'mueller',
    firstname: 'mara', 
    age:10,
    subjects:['math','chemistry','bio']
};
console.log(mensch.lastname);
console.log(mensch['lastname']);
console.log(mensch.subjects[1]);

// FUNCTIONS
function product(a,b) {
    return a*b;
}
let x = product(2,3);
console.log(x);

// CONDITIONAL STATEMENTS
    // IF ELSE
if(numbers[0]== 3 && option==true) {    // OR = ||
    console.log('Yes, numbers starts with a 3');
} else {
    console.log('No, the first numer is not 3');
}
    // WHILE
let i=0;
while(i<5){
    console.log("While loop nr " + i);
    i++;
}
    // DO WHILE (wird IMMER MIN einmal(!) ausgeführt, weil Bedingung erst nach dem ersten Loop geprüft wird)
i=0;
do{     
    console.log("DO While loop nr " + i);
    i++;
} while (i>5);

    // FOR
for(let j=0;j<5;j++){
    console.log("For loop nr "+j );
}

    // SWITCH
let color="red";    
switch(color){
    case "blue":
        console.log("color is blue");
        break;
    case "green":
        console.log("color is green");
        break;
    case "red":
        console.log("color is red");
        break;
    default:
        console.log("This is a special color!");
        break;
}
