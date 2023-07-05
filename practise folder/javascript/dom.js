
/*document object
    ==> write(), writeln()
    ==> getElementById()
        used to get object / instance of html element based on "id" atttribute
Syn: -	refvar = document.getElementById("id-attr")

    ==> getElementsByName()
        used to get object / instance of html elements based on "name" atttribute
Syn: -	refvar = document.getElementsByName("name-attr")

    ==> getElementsByTagName()
        used to get object / instance of html elements based on "tag name"
Syn: -	refvar = document.getElementsByTagName("tag-name")

    ==> getElementsByClassName()
        used to get object / instance of html elements based on "class"  attribute
Syn: -	refvar = document.getElementsByClassName("class-att")

    ==> querySelector()
        used to get object / instance of html element based on "css selector"
Syn: -	refvar = document.querySelector("selector")

    ==> querySelectorAll()
        used to get object / instance of html elements based on "css selector"
Syn: -	refvar = document.querySelectorAll("selector")
-->*/

//paired tag
const h1 = document.getElementById("head1");
document.write(`${h1.innerText}<br>`);
//h1.innerText=``;		deletion

//un-paired tag
const tb = document.getElementById("tb1");
document.write(`${tb.value}<br>`);
//tb.value=1234;		updation
//tb.value+=`apples`;    appending
tb.value = ``;		// deletion