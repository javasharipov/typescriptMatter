// 1

class Book {
	title: string
	author: string
	yearPublished: number

	constructor(title: string, author: string, yearPublished: number) {
		this.title = title
		this.author = author
		this.yearPublished = yearPublished
	}

	getDetails(): string {
		return `Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}`
	}
}

const book = new Book('To Kill a Mockingbird', 'Harper Lee', 1960)
console.log(book.getDetails())

// 2

class Wallet {
	private amount: number

	constructor(initialAmount: number = 0) {
		this.amount = initialAmount
	}

	getAmount(): number {
		return this.amount
	}

	addMoney(value: number): void {
		this.amount += value
	}

	spendMoney(value: number): string | void {
		if (value > this.amount) {
			return 'Not enough funds.'
		}
		this.amount -= value
	}
}

const wallet = new Wallet(200)
wallet.addMoney(150)
wallet.spendMoney(80)
console.log(wallet.getAmount())

// 3

class Rectangle {
	width: number
	height: number

	constructor(width: number, height: number) {
		this.width = width
		this.height = height
	}

	getArea(): string {
		const area = this.width * this.height
		return `Area of Rectangle: ${area}`
	}
}

const rectangle = new Rectangle(5, 10)
console.log(rectangle.getArea())

// 4 s

class Item {
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

const item = new Item('Laptop', 1000)
item.applyDiscount(15)
console.log(item.getPrice())

// 5

class Laptop {
	brand: string
	model: string
	year: number

	constructor(brand: string, model: string, year: number) {
		this.brand = brand
		this.model = model
		this.year = year
	}

	getDetails(): string {
		return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
	}
}

const laptop = new Laptop('Apple', 'MacBook Pro', 2023)
console.log(laptop.getDetails())
