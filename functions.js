// question 1

var arr = ["hi", "this is the longest string"];

arr.sort(function(a,b){
            return a.length<b.length;
         });
         console.log(arr);

// question 2

var arrPeeps = [

{
   name: "Andrew",
   email: "andrewtognarini@gmail.com"
},

{
   name: "Dre",
   email: "dre@gmail.com"
},

{
   name: "Alibaba",
   email: "alibaba@gmail.com"
}

]

arrPeeps.sort(function(a,b) {
   return a.name.length<b.name.length
})

console.log(arrPeeps)
         
         
arrPeeps.sort(function(a,b) {
    if (a.email < b.email) return -1;
    if (a.email > b.email) return 1;
    return 0
})

console.log(arrPeeps)


//question 3

var numbers = [1, 2, 3];
var square = numbers.map(sqr)

function sqr(num) {
    return num*num
}

console.log(square)


// question 4

var person1 = {
   numb: 18,
}

var person2 = {
   numb: 4
}

var person3 = {
   numb: 26
}

var arr3 = [person1, person2, person3]


var squared = arr3.map(sqr1)

function sqr1(obj) {
  return obj.numb*obj.numb;
}

console.log(squared)


// question 5

function operationMaker(operation) {
       

   switch(operation) {
       
  case 'add':
          return function adder(a,b) {
          return a + b;
      };

      case 'subtract':
          return function subtract(a,b) {
          return a - b;
      };

      case 'mult':
          return function mult(a,b) {
          return a * b;
      };

      case 'div':
          return function div(a,b) {
          return a / b;
      };


  default:
      console.log("Bad operation!");
   };
   
}

console.log(operationMaker("add")(10,5));
console.log(operationMaker("subtract")(10,5));
console.log(operationMaker("mult")(10,5));
console.log(operationMaker("div")(10,5));

