// EXPRESSIONS AND OPERATORS---------------------------------------------------------------

// console.log(5+8);// 5:operand +:operator  ans=(Expression) (=) Assiment opretor

// 1:- Assignment operator

// An Assignment operator assign a value to its left operand 
// based on the value of its right operand
// // The simple assignment operator is equal (=)

// var x =5;
// var y=5;
// console.log(x==y);

// console.log(`is this is a:${x==y}`);

// 2:- Arithmetic operators

// An Arithmetic operator takes numerical values
// (either literals or variable)as their operands and returns a single numberical value.

// console.log(3+3);
// console.log(10-6);
// console.log(20/5);
// console.log(5*8);
//  console.log("remender operetor" + 28%7);



// Increment and Decrement operator

// Operator: x++ or ++x or x-- or --x 
// If used postfix , with operator after operand (for example, x++)
// the increment operator increment and returns the value before incrementing

var num = 13;
//  var myNum= num-- +5;
//  var myNum= num++ +5;
//  var myNum= --num ;
var myNum = ++num;

// console.log(num);
// console.log(myNum);


// 3:- Comparison operators
// A Comparison operator compares its operand and return a logical 
// value based on whether the compersion is true.

// var a =30;
// var b =40;

// Equal(=)
// console.log(a==b);

// Not Equal(!=);
// console.log(a!=b);

// Greater then (>);
// console.log(a>b);

// Greater then or equal to(>=)
// console.log(a>=b);

// Less TouchEvent(<)
// console.log(a<b);

// Less then equal to(<=)
// console.log(a<= b);

// 4:- Logical operators

var a =30;
var b= -20;

// Logical operators are typically used with Boolean (Logical) values;
// when they are , they return a boolean value.

// Logical AND (&&)
// the logical and (&&) operator (logical conjuction) for a set of 
// operands is true if and only if ALL  of its operand is ture

// console.log(a > b && b > -30 && b <a );

// Logical OR  (||)
// The logical OR(||) operator (logical conjuction) for a set of 
// operands is true if and only if one or more operands is true.

// console.log(a > b || b > 0 || b >a );

// Logical NOt(!)
// it makes truth to falsity and vice versa

console.log(!((a>0)&& (b<0)));
console.log(!true);






