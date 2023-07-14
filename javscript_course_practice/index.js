//without ternary operator means?

// let age = 32;
// if(conditions){
// let type = "adult ticket";
// }else{
//     let type = "child ticket";
// }


// terinary operator

// let age =18;
// let type= age >18 ? "Adult Ticket" : "Child Ticket";
// console.log(type);


//Logical operators;

//logical AND(&&)
//returns true if both operands are true
// console.log(true && true);
// console.log(true && false);
// example:
// console.log(degree && skill);


// //logical OR(||)
// //returns if any one operands are true
// console.log(true||false);
// console.log(false||true);


// //Not(!)
// //returns opposite of given value
// console.log(true);
// console.log(false);



//logical operators  example problems
//highincome,cibilscore -> loan eligible, ineligible 


// ANDOPERATORS:
// let hightincome = true;
// let cibilscore = true;

// let eligibleperson = hightincome&&cibilscore

// console.log("status :" +eligibleperson);



// OROPERATORS:
// let hightincome = false;
// let cibilscore = true;

// let eligibleperson = hightincome || cibilscore

// console.log("loanstatus :" +eligibleperson);



//NOToperators:
// let hightincome = false;
// let cibilscore = true;

// let eligibleperson = hightincome || cibilscore;

// let applicationstatus = !eligibleperson;
// console.log("loanstatus :" +eligibleperson);

// console.log("appstatus :" +applicationstatus);


// logical operators withnon boolean values:
// let usercolor = "red";
// let defaultcolor = "blue";
// let currentcolor = usercolor || defaultcolor

// console.log("selectedcolor:"+currentcolor)


// let usercolor = undefined;
// let defaultcolor = "blue";
// let currentcolor = usercolor || defaultcolor

// console.log("selectedcolor:"+currentcolor)


//Bitwise operators
//human code -> machine code
//1 -> 00000001 -> 1
//2 -> 00000010 -> 2
// 3 -> 00000011 

// console.log(1|2);
// console.log(1&2);

// const readPermission = 4 ;
// const writePermission = 2;

// const executePermission = 1;

// let myPermission = 0;

// myPermission= myPermission| readPermission |writePermission;
// let msg = (myPermission & readPermission)? "yes":"no";

// console.log(msg);



//if /else: conditional statement
//normal statement;
// let hour = 14;


// if(hour>=0 && hour<= 13){
//     console.log("goodmorning");
// }

// else if(hour>=13&& hour<=17){
//     console.log("good after noon");
// }

// else{
//     console.log("good evening");
// }

// let hrs = new Date();
// let hour = hrs.getHours();

// let hour = new Date().getHours();

// if(hour>=0 && hour<= 13){
//     console.log("goodmorning");
// }

// else if(hour>=13&& hour<=17){
//     console.log("good after noon");
// }

// else{
//     console.log("good evening");
// }

//swith case - conditional statement
//example for switch /case grade feedback system
// let grade="V";


// switch(grade){
//     case "S":
//         console.log("S grade");
//         break;
//     case "A":
//     case "V":
//         console.log("A grade");
//         break;
//         case "B":
//             console.log("B grade");
//             break;
//             case "C":
//                 console.log("C grade");
//                 break;
//                 case "D":
//                     console.log("D grade");
//                     break;
//                     case "E":
//                         console.log("E grade");
//                         break;
//                         case "U":
//                             console.log("U grade");
//                             break;
//                             default:
//                                 console.log("unknown grade");
// }

//assignment:

// let marks= 50;


// switch(true){
//     case marks > 60 :
//         console.log("pass");
//         break;
//         case marks > 90:
//             console.log("super grade");
//             break;
//             default:
//                 console.log("unknown result");
// }


// let amount = 0 ;

// if(amount >=0 && amount >=10){
//     console.log("Buy Android Mobile");
// }
// else if(amount >=50 && amount >=60){
//     console.log("Buy IPhone Mobile");
// }
// else if (amount >5 && amount >10){
//     console.log("Buy IPhone Mobile");
// }
// else {
//     console.log("you cannot affort mobile phone");
// }




//for loop:

//syntax

//for(initialexpression; condition; step){
//     console.log("number");
// }

// for(let i = 10; i >= 1; i--){

//     if(i % 3 !== 0){
// console.log(" Odd Number #"+ i);
//     }


// }


//while loop

// let i=20;
// while(i>=1){

//     if(i%2 !==0){
//         console.log("odd number#" + 1);
//     }
//     i--;
// }


// do while loop:

//syntax:
// let i=5;

// do{
//     if(i%2 !==0){
//                 console.log("odd number#" + 1);
//             }
//             i--;
// }while(i >=10);


//for in loop :
//objects example:
// const person={
//     name :'bharath',
//     age:27,
//     sex:'male'
// };

// for(let key  in person){
//  console.log(key +":", person[key]);
// }


//array example:

// let colours =['red','blue', 'orange'];
// for (let key in colours){
//     console.log(colours[key]);
// }



//for of loop:

// let colours =['red','blue', 'orange'];
// for (let color of colours){
//     console.log("colours :" + color);
// }


//infinite loop:
// for(;;){
//     console.log( " infinite loop");
// }



//forof loop:
//example 

// normal function;
//   let  name = "bharath";
//   let  age= 27;
//   let  interest=["creating,teaching"];
//   let  address={
//         city:"chennai",
//         state: "tamilnadu",
//     }

// function greeting(){
//     // let msg ="my name is "+ name +",i love "+ interest;
//     let msg = `my name is ${name}, i love ${interest}`;
//     console.log(msg);
// }

// greeting();


// objected-oriented-programming (oop)

//nested object
// let person ={
//     name: "bharath",
//     age: 27,
//     interest:["creating,teaching"],
//     isAlive : true,
//     address:{
//         city:"chennai",
//         state: "tamilnadu",
//     },
//     greeting : function(){
// // let msg ="my name is "+ name +",i love "+ interest;
//     let msg = `my name is ${this.name}, i love ${this.interest}`;
//     console.log(msg);
//     }
// };

// person.greeting();

//factory functions //{// camelcase : myFirstName}

// function createPerson(name){
// return {
//     // name : name,
// name,
// greeting(){

// // let msg ="my name is "+ name +",i love "+ interest;
//     let msg = `my name is ${this.name}`;
//     console.log(msg);

// }
// //        greeting : function(){
// // // let msg ="my name is "+ name +",i love "+ interest;
// //     let msg = `my name is ${this.name}`;
// //     console.log(msg);
// //     }
// };
// }

// let anbu = createPerson("anbu");

// // anbu.greeting();
// function createPerson(name) {
//     return {
//         // name : name,
//         name,
//         greeting() {
//             console.log(`my name is ${this.name}`);
//         }
//     };
// }

// //constructor function:{//Pascal -> MyFirstName}

// function Person(name) {
//     this.name = name;
//     this.greeting = function (){
//         console.log(`my name is ${this.name}`)
//     }
// }
// let person = new Person("bharath");

// let x={}
// person.greeting();



//Dynamic Object:

// const person = {
//     name:"bharath",age:24
// }

// person.gender = "male";

// person.greeting = function(){

// }


// delete person.greeting;
// console.log(person);


//enumerating properties of an object:

// const user={
//     name:"anbu",
//     getFullName(){
//         console.log(`my name is ${this.name}`);
//     }
// }

// for (let key in user){
//     console.log(key, user[key]);
// }

// for(let key of Object.keys(user)){
//     console.log(key); 
// }


// const user={
//         name:"anbu",
//         getFullName(){
//             console.log(`my name is ${this.name}`);
//         }
//     }


//     // let another = Object.assign({
//     //     age:24,
//     //     gender: "male"
//     // },user);

//     let another={
//         ...user
//     }
//     console.log(another);


//     for(let key in user){
//         another[key] = user[key];
//     }


//javascript inbuild objects
//math object(
// function getRandomArbitrary(min, max){
//     return Math.random()*(100-1)+1;
// }
// console.log(Math.random());


// console.log(Math.round(1.4));
// console.log(Math.round(1.7));

// console.log(Math.max(45,76,89,90));
// console.log(Math.min(45,76,89,90));
// let result = Math.max(67,15,16,78,90);
// console.log(result);

// let result = Math.min(67,15,16,78,90);
// console.log(result);

// let marks =[23,34,45,56,78,90]

// let result= Math.max(...marks);
// console.log(result);


//javascript string object:

//primitive string (or) values:
// let firstname = "anbu";
// let middlename  = 'selvan';
// let lastname =`rocky`;

// const firstname2 = new String("anbu");

// let [month,date,year] = new Date().toLocaleDateString("en-IN").split("/");
// console.log(month,date,year);



//adding a element in an array:

// const cart = ["orange", 1, "apple"];

// cart[3] = "grapes";

//push:
//cart.push("grapes")


//unshift://front
// cart.unshift("pomegranete");


// //splice:
// cart.splice(2,0,"watermelon","bananas")

// console.log(cart);

//primitive values in array:
//finding element in java script array 
// const items = ["lemons","apple", "grapes"]
// // items.push("bananas");

// // console.log(items.lastIndexOf("grapes") !== -1);

//  const item =items.includes("apple");

// console.log(item);


//reference values:
// const orders = [
//     {
//         id: 1,
//         item: "mobiles",
//         quanity: "3"
//     },
//     {
//         id: 2,
//         item: "laptops",
//         quanity: "2"
//     }, {
//         id: 3,
//         item: "iphone",
//         quanity: "1"
//     }
// ]



// let result = orders.find(function (order) {
//     return order.item === "mobiles"
// })
// console.log(result);


// const veg =[
//     {id:1,item:"tomato",quality:"good"},
//     {id:2,item:"brinjal",quality:"v-good"},
//     {id:3,item:"drumstick",quality:"excellent"},
// ]

// let bag = veg.find(function(items){
//     return items.item === "brinjal"
// })
// console.log(bag);


//arrow functions:
// const veg =[
//         {id:1,item:"tomato",quality:"good"},
//         {id:2,item:"brinjal",quality:"v-good"},
//         {id:3,item:"drumstick",quality:"excellent"},
//     ]
// // let result = veg.find((items)=>{
// //     return items.item === "brinjal"
// // })
// let result = veg.find((items)=> items.item === "brinjal"
// )

// console.log(result);



//adding an element:

//end means=>//push
//start means=>//unshift
//middle=>splice



//removing an element:
//opposite of adding element syntax -> unshift => shift for removing
//push=>pop
//middle=>


// const veg =[1,2,3,4,5];
// veg.pop();
// console.log(veg);

// veg.shift();
// console.log(veg);

// veg.splice(3,1);//first starting num, 
// console.log(veg);



//emptying an array:

// let numbers= [1,2,3,4,5];

//solution 1
// numbers=[];
// console.log(numbers);

//solution 2 //not a simple codes please reduce the codes
// let another_numbers = numbers;
// numbers.length = 0;
// console.log(numbers);


//solution 3 // its also large in codes
// let another_numbers = numbers;
// numbers.splice(0,numbers.length);
// console.log(numbers);

//solution 4 // not using for large app it slows the app
// let another_numbers = numbers;
// while(numbers.length){
//     numbers.pop();
// }
// console.log(numbers);



//combining array
// const shopping_cart =[{item:"maggi"}];
// const shopping_cart =["maggi","beans","masala"];
// const adding_cart = ["matchbox","salt"];

//combined
// let receipe = shopping_cart.concat(adding_cart);
// shopping_cart[0].item ="noodles"

//extract
//  extractedinfo =receipe.slice(0,3);

//spread operator
// let receipe  = [...shopping_cart,66,[{name:"anbu", age:23},{name:"rasu",age:24}],...adding_cart] 
// console.log(receipe);



//iterating an javascript array
// const dailyRoutine = ["wakeup","eat","sleep"];

//for-of

// for(let routine of dailyRoutine){
//     //logics
//     console.log(routine);
// }


//for-in

// for(let routine in dailyRoutine){
//     console.log(routine,dailyRoutine[routine]);
// }


//for-each
//normal-function
// dailyRoutine.forEach(function(routine,index){
//     console.log(index,routine);
//     })

//arrow function for-each || fat arrow functions

// dailyRoutine.forEach((routine,index)=>{
// console.log(index,routine);
// })


//joining arrays in javascript
// const dailyRoutine = ["wakeup","eat","sleep"];
// const dailyRoutines = dailyRoutine.join(",");
// console.log(dailyRoutines);

//splitting example

// let fullName = "sudalai saravanan";
// let name = fullName.split(" ");
// let firstName = name[0];
// let lastName = name[1];
// console.log(`my firstname is ${firstName} and lastname is ${lastName}`);

// let postTitle = "this is my post".toUpperCase();
// let title = postTitle.split(" ");
// let final = title.join("_");
// console.log(final);


//sorting an jaascript array

//primitive values :
// const students =[3,8,1];

// students.sort((a,b)=>{
//     return b-a;
// });

// students.reverse();
// console.log(students);


//reference value :
// const students = [
//     { id: 1, name: "Saravanan", value:70},
//     { id: 2, name: "Bharath", value:80},
//     { id: 3, name: "Subramani", value:90},
// ];

// students.sort((a,b)=>{

//     nameA = a.name.toLowerCase();
//     nameB = b.name.toLowerCase();
//a<b => -1
// if(a.name<b.name) return -1;


// //a > b => 1
// if(a.name>b.name) return 1;

// //a=b => 0
// if(a.name === b.name) return 0;

//a<b => -1
// if(nameA.id<nameB.id) return -1;


// //a > b => 1
// if(nameA.id>nameB.id) return 1;

// //a=b => 0
// if(nameA.id === nameB.id) return 0;
// })
// console.log(students);

//allow only adults above 18:
// const queue = [34,45,67,18,12];


//some()=> true // in some anyone true means true
// let isAllowed = queue.some(function(value,index,array){
//     return value >= 18;
// })

//every()=>true,// in every all are true means true
// let isAllowed = queue.every(function(value,index,array){
//     return value >= 18;
// })

// console.log("isAllowed:",isAllowed);



//testing is it odd or even;

// const numbers = [34,45,67,18,12];
//every
// let number = numbers.every(function(value){
//     return value % 2 === 0;
// });

//some
// let numberisOdd = numbers.some(function(value){
//     return value % 2 === 1;
// });
// console.log(numberisOdd);


//testing  an element in javascript array -reference types;

//example:
// const items = [
//     { id: 1, name: "mobiles", isDeleverable: true },
//     { id: 2, name: "bell", isDeleverable: true },
//     { id: 3, name: "pc", isDeleverable: false },
// ]

// let result = items.every(function (value) {
//     return value.isDeleverable === true;
// });

// let Result = items.some(function (value) {
//     return value.isDeleverable === true;
// });

// console.log("Deliverable", result);
// console.log("Deliverable", Result);


//filtering an element in javascript

// const numbers = [34,45,67,18,12];

// let adults =numbers.filter(function(value){
//  return value >= 18;
// });

// console.log("adults:",adults);



// const cart_items = [
//     {id:1,items:"redmi",cost:"10500"},
//     {id:2,items:"realme",cost:"16500"},
//     {id:3,items:"samsung",cost:"17500"},
//     {id:4,items:"moto",cost:"18500"},
// ];

// let result =cart_items.filter((value)=>{
//  return value.cost <= 17000;
// });

// console.log("result:",result);



//array.find()
//array.findindex()

// const cart_items = [
//         {id:1,items:"redmi",cost:10500},
//         {id:2,items:"realme",cost:16500},
//         {id:3,items:"samsung",cost:17500},
//         {id:4,items:"moto",cost:18500},
//     ];

//     let result2 =cart_items.filter((value)=>{
//          return value.cost <= 17000;
//         });
//     let result =cart_items.find((value)=>{
//          return value.cost >= 17000;
//         });

//         let result1 =cart_items.findIndex((value)=>{
//             return value.cost > 16000;
//            });

//         console.log("result:",result);
//         console.log("result1:",result1);
//         console.log("result2:",result2);



//mapping a javascript

//primitive types
// const numbers =[1,2,3,4,5,6,7,8,9,0];


// let result =numbers.map((value)=>{
// return value * 2 ;
// })
// console.log(result);

//reference

// const people = [
//     { id: 1, fName: "bharath", lName: "chella" },
//     { id: 1, fName: "sudalai", lName: "saravanan" },
//     { id: 1, fName: "siva", lName: "sankar" },
// ];


// let result = people.map((value) => {

//     let fullName = [value.fName, value.lName].join(" ");
//     let obj = { id: value.id, fullName: fullName };
//     return obj
// });

// console.log(result);


//javascript array methods
//.sort
//.every,some
//.filter
//.map



//chaining methods of javascript
//example
// const products = [
//     { id: 1, title: "android phone", cost: 10500 },
//     { id: 2, title: "laptop", cost: 16500 },
//     { id: 3, title: "earphone", cost: 17500 },
//     { id: 4, title: "bluetooth", cost: 18500 },
//     { id: 5, title: "airbud", cost: 8500 },
// ];


//first method: but its large& long
//sort it using lowest price
// let sortedproducts = products.sort((a, b) => {
//     //  return a.cost-b.cost; //ascending
//     return b.cost - a.cost; //descending

// })

//sort it by title ascending
// let titlesorted = sortedproducts.sort((a, b) => {
//     if (a.title < b.title) return -1;
//     if (a.title > b.title) return 1;
// })



//filter products lessthan 8000
// let filteredproducts = titlesorted.filter((value) => {
//     return value.cost < 10500;
// })


//map it like this :// android phone - "10500"
// let mappedproducts = filteredproducts.map((val) => {
//     return val.title + "_" + val.cost;
// })
// console.log(sortedproducts);
// console.log(titlesorted);
// console.log(filteredproducts);
// console.log(mappedproducts);

//second method:
// let mappedproducts = products.sort((a, b) => {
//     //  return a.cost-b.cost; //ascending
//     return b.cost - a.cost; //descending
// }).sort((a, b) => {
//     if (a.title < b.title) return -1;
//     if (a.title > b.title) return 1;
// }).filter((value) => {
//     return value.cost < 10500;
// }).map((val) => {
//     return val.title + "_" + val.cost;
// })


// console.log(mappedproducts);

//next simplify codes:
// let mappedproducts = products.sort((a, b) => {
//     //  return a.cost-b.cost; //ascending
//     return b.cost - a.cost; //descending
// }).sort((a, b) => {
//     if (a.title < b.title) return -1;
//     if (a.title > b.title) return 1
// })
//     .filter((value) => value.cost < 10500)
//     .map((val) => val.title + "_" + val.cost)

// console.log(mappedproducts);


//javascript reduce array methods();

//primitive method:
// const donations =[9000,8000,7000,2000];

// let result = donations.reduce((previousvalue,currentvalue)=>{
//     //logic
// console.log("previous val :",previousvalue);
// console.log("current val :",currentvalue);
// return previousvalue + currentvalue;

// });

// console.log("result :",result);


//reference method
// const products = [
//     { id: 1, title: "android phone", cost: 10500 },
//     { id: 2, title: "laptop", cost: 16500 },
//     { id: 3, title: "earphone", cost: 17500 },
//     { id: 4, title: "bluetooth", cost: 18500 },
//     { id: 5, title: "airbud", cost: 8500 },
// ];
//reduce means leftto right
// let totalcost = products.reduce((accumulator,currentval)=>{

//     return accumulator + currentval.cost; 
// },1000)


// reduceRight means right to left simplify
// let totalcost = products.reduceRight((accumulator,currentval)=>{

//     return accumulator + currentval.cost; 
// },1000)


//normal function
// function addCost(accumulator,currentval){

//     return accumulator + currentval.cost; 
// }
// let totalcost = products.reduce(addCost,1000);
// console.log("total amount :",totalcost);


//ecma function
// const addCost =(accumulator, currentval)=>
//     accumulator + currentval.cost;
// let totalcost = products.reduce(addCost,10);

// console.log("total amount :",totalcost);


//function declaration vs function expression

// let number =23;
// let number2 = 23;


//function declaration
// function addno(){
// let result = number + number2;
// console.log(result);
// }

// addno();

//function expression ( named function expression)
// const addno = function addno(){
//     let result = number + number2;
//     console.log(result);
//     }

//anonymous function expression
// const Addno = function () {
//     let result = number + number2;
//     console.log(result);
//     }
//     Addno();


// const addno = ()=>{
//     let result = number + number2;
//     console.log(result);
// }
// addno();


// const addno = new Function("console.log(number+number2)");

// addno();




//function declaration

// function addno(){
//     console.log("adding a add no");
// }

// addno();

// //function expression 

// let add = function(){
//     console.log("add")
// };

// add();



//functions in depth


// let n1 = 2;
// let n2 = 3 ;


//immediately invoked function expression (IIFE);
// (function sumnumbers(){
//     let result = n1+ n2;
//     console.log(result);
// })();

// sumnumbers();

//another approach
// (function sumnumbers(num1,num2){
//     let result = num1 + num2;
//     console.log(result);
// })(n1,n2);


//modern arrow function
// ((num1,num2)=>{
// let result = num1+num2;
// console.log(result);
// })(n1,n2);


// (() => {
//     let n1 = 2;
//     let n2 = 3;
//     let result = n1 + n2;
//     console.log(result);
// })();


// (() => {
//     let n1 = 2;
//     let n2 = 3;
//     let result = n1 + n2;
//     function displaynumber() {
//         console.log("Result :", result);
//     }
//     displaynumber();

//     // console.log(result);
// })();


//function arguments
//  function sum(){

//     let total = 0;
//    for (let value of arguments) {
//     total += value;

//    }

// return total;

//  }

//  let result = sum(89,89,90,100);

//  console.log(result);



//rest operators
// function sumexpense(loan,...arguments) {
//     let total = arguments.reduce((a, b) => a + b);
//     return total - loan;
// }
// let result = sumexpense(90, 90, 90, 100);

// console.log(`${result}`);


//function default parameters

//normal example :
// function caltax(cost,tax){

// let withtax = cost * (tax /100);
// let totalamount = cost + withtax; 

// console.log(`Total cost is ${cost},\n\nGST amount of cost with(25%) is ${withtax},\n\nTotal amount is ${totalamount}`);

// }

// caltax(45,25);


//default parameters
// function caltax(cost, title, tax=18){

// // tax = tax ?? 25;

// let withtax = cost * (tax /100);
// let totalamount = cost + withtax; 

// console.log(`Total cost is ${cost},\n\nGST amount of cost with tax(${tax}%) is ${withtax},\n\nTotal amount is ${totalamount}`);

// }

// caltax(45,"horn");


//getters and setters // special methods

// let student ={
//     fName : " arasu", // data properties
//     lName : " raj",
//     fullname : function(){
//         return student.fName + " " + student.lName;
//     }
// }

// console.log(student.fullname()); 

// //arrow function
// let student1 ={
//     fName : " arasu", // data properties
//     lName : " raj",
//     fullname : () => student1.fName + " " + student1.lName
// }

// console.log(student1.fullname()); 

// //arrow function with template itterals
// let student2 ={
//     fName : " arasu", // data properties
//     lName : " raj",
//     fullname : () => `${student2.fName} ${student2.lName}`
// }

// console.log(student2.fullname()); 

// //es6
// let student3 ={
//     fName : " arasu", // data properties
//     lName : " raj",
//     fullname() {
//        return `${student3.fName} ${student3.lName}`;
//     } 
// }

// console.log(student3.fullname()); 

// //getters

// let student4 ={
//     fName : " arasu", // data properties
//     lName : " raj",

//     // acceser properties
//     get fullname() {
//         return `${student4.fName} ${student4.lName}`;
//     },

//     set fullname(value){
//         //split it by first name and last name
//         let values = value.split(" ");
//         console.log(values);
//         this.fName = values[0];
//         this.lName = values[1] ?? " ";
//     }
// }

// student4.fullname = "trisha krishnan"
// //getters => use to get data
// //setters => use to set data

// console.log(student4.fullname); 


//error handling

// let student4 = {
//     fName: " arasu", // data properties
//     lName: " raj",

//     // acceser properties
//     get fullname() {
//         return `${student4.fName} ${student4.lName}`;
//     },

//     set fullname(value) {

//         if (typeof value !== String) {
//             const err = new Error("its not a string");
//             console.log(err);
//             return;
//         }
//         if (value.length <= 3) {

//             new Error("name invalid");
//         }

//         //split it by first name and last name
//         let values = value.split(" ");
//         this.fName = values[0];
//         this.lName = values[1] ?? " ";
//     },
// }

// //defencive programming
// try {
//     student4.fullname = "anitha";
// } catch (err) {
//     alert(err);
// }

// student4.fullname = "trisha krishnan"
// //getters => use to get data
// //setters => use to set data

// console.log(student4.fullname);




// let a=[2,3,4,5];


// const unique = input.reduce((a, b) => {
//     if (a.indexOf(b) < 0) a.push(b);
//     return a;
//   }, []);
  
//   console.log(unique);