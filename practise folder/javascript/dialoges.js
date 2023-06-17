//demo on dilaoges

//alert()

function myFunction() {
    alert("Hello! I am an alert box!");
}


function mycal() {

    alert("sum" + (100 + 20));
}

function mysub() {

    alert("sub" + (65200 - 586));
}

function mymult() {

    alert("mult" + 562 * 55);
}

function mydiv() {

    alert("This is the div ans" + 596 / 6);
}

//confirm(confirmation dialoges box)

document.write("<h1>Demo on confirm</h1>")

let x = confirm("You Want To Submit");

document.write(x, "<br>");

let y = confirm("Are u Sure");

document.write(" confirm =>" + y);

//demo on prompt(take input value from user& use to creat propmt box)

//prompt
document.write("<h1>demo on propmt</h1>")
let a = prompt("enter name");

document.write("hii => " + a);

let b = prompt("enter age ");

document.write('Your age is =>' + b);