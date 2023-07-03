const name = {
    name: "anshita",
    age: 20,
    city: "hyderbad",
}

console.log(name);

const person = {
    name: 'John',
    age: 20
};
console.log(person); // object

const per = {
    name: "ayuhsi",
    age: 25,
    city: 'hyd',
    salary: 25000,
}

console.log(per);

const personInfo = {
    name: "ankita",
    age: 30,
    city: 'malasiya',
    salary: 45000,
}

console.log(personInfo);

const user = {
    name: 'tilak',
    age: 30,
    city: 'hyd',
    salary: 30000,
}

console.log(user);

const userInfo = {
    name: "vaishu",
    age: 21,
    city: "pune",
    salary: 15000,
}

console.log(userInfo);

console.log(userInfo.name);
console.log(userInfo.age);
console.log(userInfo.salary);
//expression method

const stud = { //properties
    "rno": 1,
    "name": "ram",
    total: 350,
    //expr method
    getResult: function () {
        if (stud.total >= 400)
            return "Pass";
        else
            return "fail";
    }
}

document.write(`${stud.rno} &nbsp; ${stud.name} &nbsp; ${stud.total}<br>`);
document.write(`${stud.getResult()}<br>`);
stud.total = 450;
document.write(`${stud.getResult()}<br>`);


const userDetail = {
    "rno": 2,
    "name": "sam",
    total: 200,
    //expr method
    getResult: function () {
        if (userDetail.total >= 300)
            return "Pass";
        else
            return "fail";
    }
}

document.write(`${userDetail.rno}
${userDetail.name}
 ${userDetail.total}<br>`);
document.write(`${userDetail.getResult()}<br>`);

const student = {
    "rno": 3,
    "name": "anshita",
    total: 700,

    getResult: function () {
        if (student.total >= 600)
            return "Pass";
        else
            return "fail";
    }
}

document.write(`${student.rno}
 ${student.name} 
 ${student.total}<br>`);
document.write(`${student.getResult()}<br>`);


//array of object 
var products = new Array();  //for storing of products

//for storing product details
function Product(name, inventory, unit_price) //constructor
{
    this.name = name;			//init to object
    this.inventory = inventory;
    this.unit_price = unit_price;
}

function addProduct() {

    products.push(new Product(pn.value, inv.value, up.value));		//adding product to collection
    pn.value = "";
    inv.value = "";
    up.value = "";		//clear all values
    pn.focus();	//placing cursor 

}

function generateBill() {
    let slno = 1, prodAmt = 0, billAmt = 0, cgst, sgst, finalAmt;

    for (let p of products) //extracting 1-by-1 product
    {
        prodAmt = p.inventory * p.unit_price;
        document.write(`${slno} '<br>' ${p.name}  ${p.inventory}   ${p.unit_price} ; &#8377;${prodAmt}<br>`);
        billAmt += prodAmt;
        slno++;
    }
    sgst = billAmt * 18 / 100;
    cgst = billAmt * 12 / 100;
    finalAmt = billAmt + sgst + cgst;
    document.write(`Bill Amount : &#8377;${billAmt} <br>`);
    document.write(`SGST	: &#8377;${sgst} <br>`);
    document.write(`CGST		: &#8377;${cgst} <br>`);
    document.write(`Total Bill Amount : &#8377;${finalAmt} <br>`);
}

const myArr = [//array of object
    {
        studenName: "vansh",
        studenClass: 1,
        studenSection: "a"
    },
    {
        studenName: "aarush",
        studenClass: 2,
        studenSection: "b"
    }
];

console.log(myArr[1]);

console.log(myArr[0]);



