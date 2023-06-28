document.write("<h2>'Demo On Function'</h2>")

//named function

function myfun () {

    console.log("hi,i am function")

}

myfun();//function calling

function add () {

    console.log(20+30);
}

add();

function sub(){

    console.log(55-28);
}

sub();

function mult(){

    console.log(90*2,55*9);
}

mult();

function div(){

    console.log(60/7,88/6,-99/3);
}

div();

function greet(name) {//(parameter)
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

function ag(age){

    console.log("Your age is"+age);
}

let age =prompt("Enter Your age");

ag(age);

//function expression
/* syn
function (parameter){
    body
}*/

const math = {
    factit: function factorial(n) {
        console.log(n);
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    },
};

math.factit(3);

const exp=function(a,b)//function expression
{
    return a+b;


    
}
let result=exp(10,20);//func calling

console.log(result);

function callAdd(x, y) {
    let z = x + y;
    return z;
}
console.log("Addition : " + callAdd(1000, 50000));

function addNames(a,b,c){
    let d=a+b+c;

    return d;
}

console.log(addNames("anshita", "ayu","ankita"));

