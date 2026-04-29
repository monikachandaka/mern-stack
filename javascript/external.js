// console.log("this is external js file");
// document.write("sample output display using document object")

num="java :${10+20}"
console.log(num);
num='javascript ${10+20}'
console.log(num);
a=50;
b=50
num=`addition 
of a and b :${a+b}`
console.log(num);

num="java"
num=50;
console.log(num);

num=true
console.log(num);

class sampleExample{
    display(){
        console.log("this is non-static display method in sampleExample class");

    }
    test(){
        console.log("test method");
    }
}

// new sampleExample().display()
// new sampleExample().display()
// new sampleExample().display()

s1=new sampleExample()
s1.display()
s1.test()

function addition(){
    console.log(10+20);
}
addition()

num=330;
result=num%2==0?"even number " : "odd number"
console.log(result);



a=10;
b=`10` ;
c=null
d=Symbol(10);
e=1234567898765432n
let f;
console.log("Type of variable a is:", typeof a);
console.log("Type of variable b is:", typeof b);
console.log("Type of variable c is:", typeof c);
console.log("Type of variable d is:", typeof d);
console.log("Type of variable e is:", typeof e);
console.log("Type of variable f is:", typeof f);


let a=10;
let a=20;





