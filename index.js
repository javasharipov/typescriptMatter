// 1
var Book = /** @class */ (function () {
    function Book(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
    Book.prototype.getDetails = function () {
        return "Title: ".concat(this.title, ", Author: ").concat(this.author, ", Year Published: ").concat(this.yearPublished);
    };
    return Book;
}());
var book = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
console.log(book.getDetails());
// 2
var Wallet = /** @class */ (function () {
    function Wallet(initialAmount) {
        if (initialAmount === void 0) { initialAmount = 0; }
        this.amount = initialAmount;
    }
    Wallet.prototype.getAmount = function () {
        return this.amount;
    };
    Wallet.prototype.addMoney = function (value) {
        this.amount += value;
    };
    Wallet.prototype.spendMoney = function (value) {
        if (value > this.amount) {
            return 'Not enough funds.';
        }
        this.amount -= value;
    };
    return Wallet;
}());
var wallet = new Wallet(200);
wallet.addMoney(150);
wallet.spendMoney(80);
console.log(wallet.getAmount());
// 3
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.height;
        return "Area of Rectangle: ".concat(area);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea());
// 4 s
var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.applyDiscount = function (percentage) {
        this.price -= (this.price * percentage) / 100;
    };
    return Item;
}());
var item = new Item('Laptop', 1000);
item.applyDiscount(15);
console.log(item.getPrice());
// 5
var Laptop = /** @class */ (function () {
    function Laptop(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Laptop.prototype.getDetails = function () {
        return "Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year);
    };
    return Laptop;
}());
var laptop = new Laptop('Apple', 'MacBook Pro', 2023);
console.log(laptop.getDetails());
