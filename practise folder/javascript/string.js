//demo on   DataTypes numbers/string
//number
let a = 10;
b = 50
let c = a + b;
let c1 = c + 100;
document.write(c);
document.write("<br/>");
document.write(c1);

let x = 20000;

y = 52203;

let sum = x + y;
document.write("<br/>")
document.writeln(sum);

let aa = 500;
bb = 650;
let sub = (aa - bb);
document.write("<br/>")
document.writeln(sub);

let ab = 8934;
ac = 55;
let mult = (ab * ac);
document.write("<br/>")
document.write(mult);

let xx = 564;
yy = 89;
let div = (xx / yy);
document.write("<br/>")
document.write(div);

//string

let fname = "anshita";

lname = "yadav";
document.write("<br/>")
document.write(fname + lname);
document.write("<br/>")

document.write("<h1>This is String</h1>");

let firstname = "ankita";
lastname = 'yadav';
age = 27;

document.write(firstname + " " + lastname + " " + age);

let nameing = "uday";
age = 29
document.write("<br/>")
document.write(nameing + age);

let pername = "tilak";
surname = "saxsena";
ismale = "true"//boolean 
document.write("<br/>")
document.write(pername + " " + surname + " " + ismale);

//js literals 
//string " " $' ' it allows ony one line text
//` ` templates(backtick)it allows n no of line text


let subname = "HTML ";
sub = 'CSS';
document.write("<br/>")
document.write(subname + sub);

let para = `Single quotes and double quotes are practically the same and you can use either of them.

Backticks are generally used when you need to include variables or expressions into a string. 
This is done by wrapping variables or expressions with above.`
document.write("<br/>");
document.write(para);

let templates = `HTML

CSS
JAVASCRIPT` ;
document.write("<br/>");
document.write(templates);

let data = "string,number,boolean,null,undefined,object";
document.write("<br/>");
document.write(data);

let nameInfo = "ayushi,yadav,26";

document.write("<br/>");
document.write(nameInfo);

let nameDetails = "anshita,yadav,20,indian";

document.write("<br/>");

document.write(nameDetails);
