//demo on operators


let x = 24, y = 8;
//arithmatic	( +	,-	,*	,/	,%	,**)
document.write(x + y, `<br>`);

document.write(y * 3, `<br>`);

document.write(y ** 3, `<br>`);

//relational ope(>		<	,>=		,<=		,==		,!=	,===	,!==)(comparsion)
document.write(x >= 0, `<br>`);
let z = "8";
document.write(y == z, `<bR>`);

document.write(y === z, `<bR>`);

document.write(y != z, `<bR>`);

document.write(y !== z, `<bR>`);

//logical ope	&&	||	!(perform multiple comparison at a time)
document.write(y >= 1 && y <= 10, '<br>');

document.write(!(x > 0), '<bR>')

//shorthand	(+=	-=	*=		/=			%=		**=	)(combination of arthematic &assignment oper)
x += 40;		//x=x+40;
y *= 15;		//y=y*15;
document.write(x, "<br>");

document.write(y, "<br>");

//concate (+) (one string complusary for assign concentinaton)
document.write("rama" + "rao<br>");

document.write(120 + "apples<br>");

document.write(40 + "mango", "<br>");

//uniary operators(it req only one operand)

x++;		//post
document.write(x, "<br>");

++x;	//pre
document.write(x, "<br>");

--y;	//pre
document.write(y, "<br>");

y--;	//post
document.write(y, "<br>");
document.write(x++, "<bR>");

//ternary(condition)? statement1 : statement2 
document.write(x % 2 === 0 ? "even number" : "odd number");
