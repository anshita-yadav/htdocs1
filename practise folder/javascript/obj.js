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