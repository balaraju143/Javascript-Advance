// section1-Array Higher Order Methods tasks:

//Task 1-forEach() practice 

let subjects = ["Maths", "Science", "English", "History"]

let result = subjects.forEach((sub, index) => {
    console.log(`Subject ${index + 1}: ${sub}`)
})

console.log(result)

// Why does forEach() return undefined?
// Because forEach() only executes a function for each element.It does not return a new array.

//Task 2 -map practice 

let prices = [100, 200, 300, 400]
let newPrices = prices.map(price => price + price * 0.10)
console.log(newPrices)

//Task 3 - filter() practice 

let students = [
 { name: "A", marks: 45 },
 { name: "B", marks: 75 },
 { name: "C", marks: 35 },
 { name: "D", marks: 85 }
]

let passed = students.filter(student => student.marks > 50)
console.log(passed)

// Task 4 - find() practice 

let firstPass = students.find(student => student.marks > 50)
console.log(firstPass)

// Difference between filter() and find()?
// filter() → returns all matching elements in an array
// find() → returns only the first matching element

//Task 5- reduce() practice 

let cart = [
 { item: "Shirt", price: 1000 },
 { item: "Shoes", price: 2000 },
 { item: "Watch", price: 3000 }
]

let total = cart.reduce((sum, item) => sum + item.price, 0)
console.log("Total:", total)

// Bonus with 5% tax
let totalWithTax = cart.reduce((sum, item) => sum + item.price * 1.05, 0)
console.log("Total with 5% tax:", totalWithTax)

//Task 6-some practice 

let numbers = [1, 3, 5, 7, 8]
let Even = numbers.some(num => num % 2 === 0)
console.log(Even)

//Task 7 - every() practice 

let ages = [22, 25, 19, 30]
let allElders = ages.every(age => age > 18)
console.log(allElders)

//Task 8-sort() practice 

let salaries = [50000, 10000, 70000, 30000]
let asc = [...salaries].sort((a,b) => a - b)
let desc = [...salaries].sort((a,b) => b - a)
console.log("Ascending:", asc)
console.log("Descending:", desc)

// Why normal sort() fails?
//Ans: Because default sort() converts numbers into strings.


// Task 9 – Array Conversion

let arr = [10, 20, 30, 40];
console.log(arr.toString());   
console.log(arr.join("-"));    

// SECTION 2 – STRING METHODS:

// Task 10 – charAt & charCodeAt

let word = "Developer";
console.log(word.charAt(4));      
console.log(word.charCodeAt(4));  

// Task 11 – slice()

let company = "StacklyCompany";
console.log(company.slice(7));

// Task 12 – Case Conversion

let userInput = "javaScript";
console.log(userInput.toUpperCase());
console.log(userInput.toLowerCase());

// Task 13 – trim()

let email = " naveen@gmail.com ";
console.log(email.trim());

// Task 14 – includes()

let message = "Welcome to JavaScript Training";
console.log(message.includes("JavaScript")); 

// Task 15 – split()

let movie = "spider-man-no-way-home";
console.log(movie.split("-"));

// Task 16 – indexOf & lastIndexOf

let text = "programming";
console.log(text.indexOf("m"));      
console.log(text.lastIndexOf("m"));  

// Task 17 – replace()

let tech = "I love python";
console.log(tech.replace("python", "javascript"));

// Task 18 – startsWith & endsWith

let filename = "report.pdf";
console.log(filename.startsWith("report")); 
console.log(filename.endsWith(".pdf"));    

// Task 19 – repeat()

let star = "*";
console.log(star.repeat(10));

// FINAL TEAM CHALLENGE – Employee Report System

let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
];

// 1) Names to uppercase
let upperNames = employees.map(emp => emp.name.toUpperCase());
console.log(upperNames);

// 2) Filter salary > 40000
let highPaid = employees.filter(emp => emp.salary > 40000);
console.log(highPaid);

// 3) Find first salary > 60000
let firstHigh = employees.find(emp => emp.salary > 60000);
console.log(firstHigh);

// 4) Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

// 5) Sort salaries descending

let sorted = [...employees].sort((a,b) => b.salary - a.salary)
console.log(sorted)