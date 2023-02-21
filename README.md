# JsIntro
1.
console.log(a);
var a = 5;

2.
console.log(a);
let a = 5;
3.
foo();
function foo() {
  console.log('hello');
}

4.
foo();
var foo = function() {
  console.log('hello');
}

5.
var x = 1;
if (true) {
  var x = 2;
  console.log(x);
}
console.log(x);
