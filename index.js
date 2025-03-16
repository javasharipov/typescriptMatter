// 1 - masala
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Grade: ").concat(this.grade);
    };
    return Student;
}());
var student = new Student('Khasan', 20, 'F');
console.log(student.getInfo());
// 2 - masala
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balance = initialBalance;
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            return 'Insufficient balance.';
        }
        this.balance -= amount;
    };
    return BankAccount;
}());
var account = new BankAccount();
account.deposit(100);
account.withdraw(49);
console.log(account.getBalance());
// 3 - masala
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.pi = 3.14;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        var area = this.pi * Math.pow(this.radius, 2);
        return "Area of Circle: ".concat(area);
    };
    return Circle;
}());
var circle = new Circle(2);
console.log(circle.getArea());
// 4 - masala
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.applyDiscount = function (percentage) {
        this.price -= (this.price * percentage) / 100;
    };
    return Product;
}());
var product = new Product('Phone', 500);
product.applyDiscount(20);
console.log(product.getPrice());
// 5 - masala
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getInfo = function () {
        return "Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year);
    };
    return Car;
}());
var car = new Car('Toyota', 'Corolla', 2022);
console.log(car.getInfo());
