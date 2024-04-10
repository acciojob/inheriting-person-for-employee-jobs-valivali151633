// complete this js code
class Person(name, age) {
	constructor(name , age){
		this.name = name;
		this.age = age;
	}
	greet(){
		return `Hello, my name is ${this.name} , I am ${this.age} years old.`
	}
}

class Employee extends Person (name, age, jobTitle) {
	constructor(jobTitle){
		super(name , age);
		this.jobTitle = jobTitle;
		
	}
	jobGreet(){
		return `Hello, my name is ${this.name}, I am ${this.age} years old , and my job title is ${this.jobTitle}`
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
