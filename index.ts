// 1 - masala

class Student {
	name: string
	age: number
	grade: string

	constructor(name: string, age: number, grade: string) {
		this.name = name
		this.age = age
		this.grade = grade
	}

	getInfo(): string {
		return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
	}
}

const student = new Student('Khasan', 20, 'F')
console.log(student.getInfo())

// 2 - masala

class BankAccount {
	private balance: number

	constructor(initialBalance: number = 0) {
		this.balance = initialBalance
	}

	getBalance(): number {
		return this.balance
	}

	deposit(amount: number): void {
		this.balance += amount
	}

	withdraw(amount: number): string | void {
		if (amount > this.balance) {
			return 'Insufficient balance.'
		}
		this.balance -= amount
	}
}

const account = new BankAccount()
account.deposit(100)
account.withdraw(49)
console.log(account.getBalance())

// 3 - masala

class Circle {
	radius: number
	pi: number = 3.14

	constructor(radius: number) {
		this.radius = radius
	}

	getArea(): string {
		const area = this.pi * this.radius ** 2
		return `Area of Circle: ${area}`
	}
}

const circle = new Circle(2)
console.log(circle.getArea())

// 4 - masala

class Product {
	name: string
	price: number

	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}

	getPrice(): number {
		return this.price
	}

	applyDiscount(percentage: number): void {
		this.price -= (this.price * percentage) / 100
	}
}

const product = new Product('Phone', 500)
product.applyDiscount(20)
console.log(product.getPrice())

// 5 - masala

class Car {
	brand: string
	model: string
	year: number

	constructor(brand: string, model: string, year: number) {
		this.brand = brand
		this.model = model
		this.year = year
	}

	getInfo(): string {
		return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
	}
}

const car = new Car('Toyota', 'Corolla', 2022)
console.log(car.getInfo())
