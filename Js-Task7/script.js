//JavaScript Practice Tasks

//SECTION 1 – Date Object Tasks:

/*TASK 1 – Custom Digital Clock
Create a live digital clock using:
- new Date()
- getHours()
- getMinutes()
- getSeconds()
- setInterval()
Format:
Current Time: 14 : 05 : 09
(Add leading zero if value < 10)*/

//Ans:

function digitalClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  console.log("current Time: " + hours + " : " + minutes + " : " + seconds);
}
setInterval(digitalClock, 1000);


//TASK 2 – Find Current Day Name

/*Use getDay()
Array:
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
Print:
Today is Friday*/

//Ans:
let today = new Date();
let dayNumber = today.getDay();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is " + days[dayNumber]);

//TASK 3 – Age Calculator (Basic)

/*let birthYear = 2003
Use getFullYear()
Print:
Your age is 23*/

//Ans:
let birthYear = 2003;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log("Your age is " + age);


//TASK 4 – Create Specific Date
/*Create:
15 August 2020
10:30:45 AM
Using:
- new Date()
- setFullYear()
- setMonth()
- setDate()
- setHours()
- setMinutes()
- setSeconds()
Print using:
toLocaleString()*/

//Ans:
let myDate = new Date();
myDate.setFullYear(2020);
myDate.setMonth(7);      
myDate.setDate(15);
myDate.setHours(10);
myDate.setMinutes(30);
myDate.setSeconds(45);
console.log(myDate.toLocaleString()); // output:8/15/2020, 10:30:45 AM

//SECTION 2 – setTimeout & setInterval

/*TASK 5 – Delayed Message
Use setTimeout()
After 3 seconds print:
Welcome Raju*/

//Ans:
setTimeout(function(){
  console.log("Welcome Raju");
}, 3000);

//TASK 6 – Stop Interval After 5 Seconds
/*Output:
1
2
3
4
5
Stopped
Use:
- setInterval()
- clearInterval()*/

//Ans:

let count = 1;
let interval = setInterval(function(){
  console.log(count);
  count++;
  if(count > 5){
    clearInterval(interval);
    console.log("Stopped");
  }
}, 1000);

//SECTION 3 – Promise Practice

/*TASK 7 – Simple Promise
If number > 10 → resolve("Valid number")
Else → reject("Invalid number")
Handle using:
.then()
.catch()
.finally()*/

//Ans:
let number = 25;
let checkNumber = new Promise((resolve, reject)=>{
  if(number > 10){
    resolve("Valid number");
  } else {
    reject("Invalid number");
  }
});
  checkNumber
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Promise completed"));


//SECTION 4 – Fetch API Task

/*TASK 8 – Fetch Product Prices
API:
https://fakestoreapi.com/products
Print only:
Product: <title>
Price: <price></price>*/

//Ans:

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    data.ForEach(product=>{
        console.log("Product: "+ product.title)
        console.log("Price: "+ product.price)
         console.log("-----------------");
    })
})
.catch(error => console.log(error));


//SECTION 5 – Execution Order Task

function one(){
 console.log("one");
}
function two(){
 console.log("two");
}
function three(){
 console.log("three");
}
one()
setTimeout(two,0)
three()

//Predict Output and Explain Why
function one(){
  console.log("one");
}
function two(){
  console.log("two");
}
function three(){
  console.log("three");
}
one();
setTimeout(two, 0);
three();

//Ans:
//one
//three
//two

//Why:

// When one() is called, it executes immediately and prints "one".
//  Then, setTimeout(two, 0) schedules two() to run after the current call stack is clear, but it does not execute immediately.  Next, three() is called and executes immediately, logging "three".After the call stack is empty, the event loop picks up the scheduled two() function and executes it, logging "two".

