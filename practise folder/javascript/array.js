document.write("<h1>Demo On Array</h1>")

const a = ["anshita", "ayushi", "ankita"];

console.log(a);
console.log(a.length);

a[0] = "vaishu";//modification in value
console.log(a);
a[3] = "diksha";//adding
console.log(a);

//we can't modified variable (a) in const 

const runs = [4, 5, 10, 15, 12]//array initialization
console.log(runs);

const num = [50 + 60, 40 + 60, 422 + 658, 489 + 57];

console.log(num);

const sum = [100 - 40, 659 - 56, 200 - 35, 856 - 998];


console.log(sum);


const mult = [100 * 5, 56 * 2, 65 * 8, 700 * 9, 658 * 3];

console.log(mult);

const div = [55 / 2, 99 / 3, 66 / 4, 88 / 6, 99 / 7];

console.log(div);

//array with new

const x = new Array();//declaration

console.log("size" + x.length);
x[0] = 10;
x[1] = 20;
x[2] = 30;
x[3] = 40;

console.log(x);

const names = new Array("uday", "tilak", "aarush", "vansh");
console.log(names.length);
console.log(names);

//array  different data types
const array = ["ram", 30, true, new Date()];

console.log(array);

console.log(array[0]);

const per = [30, "indian", true, "ankita"];

console.log(per);
per[1] = "malasiya";
console.log(per);
console.log(per[1]);

//dynamic array
const els = [11, 22, 33, 44, 55, 66, 77, 88];

console.log(els);

els.length = 5;//size reduced
console.log(els);

els.length = 7;//size adding
console.log(els);

els[5] = 100;
els[6] = 200;//cell new adding
console.log(els);

//for loop array

const staticArrayLiteral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//iterating array elements with for loop
for (let i = 0; i < staticArrayLiteral.length; i++) {
    document.write("Array element of index staticArrayLiteral[" + i + "] is :" + staticArrayLiteral[i] + "<br>");
}


const subName = new Array("HTML", "CSS", "JS", "REACT", "FULLSTACK");

for (let i = 0; i < subName.length; i++) {
    document.write("Array [" + i + "] is :" + subName[i] + "<br>");
}

const personNames = new Array("anshita", "ayushi", "ankita", "aarush", "vansh");

for (let i = 0; i < personNames.length; i++) {
    document.write("my name is [" + i + "] is :" + personNames[i] + "<br>");
}





