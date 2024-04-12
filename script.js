// complete this js code
class Person(name, age) {
	constructor(name , age)
	{
		this.name = name;
		this.age = age
	}
	greet(){
		console.log(`Hello, my name is ${this.name} , I am ${this.age} years old.`)
	}
}

class Employee extends Person (name, age, jobTitle) {
	constructor(){z
		super(name , age);
		
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
