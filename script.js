// console.log('Привет, мир!')
// console.log('Привет, мир!')
// let message = 'Привет'
// console.log(message)

// message = 'Пока'
// console.log(message)


// const message = 'Вася'

// message = 'Петя' // Ошибка, так как константа не может быть изменена
// console.log(message)




// let message = 'Farkhad';
// const age = 25
// const isProgrammer = true

// console.log(message)
// console.log(age)
// console.log(isProgrammer)


// const name = 'Farkhad';
// const admin = name;

// console.log(admin)

// const age = 25
// console.log(age)

//------------------------------ UROK 3---------------------------------------------

// const greeting = 'Привет'
// const name = "Александр"
// const goodbyeMessage = 'До свидания'
// const message = `${greeting}, ${name}! ${goodbyeMessage}`
// console.log(message)


// const a = 5
// const b = 12
// const sum = `summa cisel a i b ravna ${a+b}`
// console.log(sum)

// const age = 25
// const ischild = age < 18
// console.log(ischild)


// const num =111
// const str = '222'
// const resukt = num + str
// console.log(resukt) // Результат будет '111222', так как при сложении числа и строки число преобразуется в строку.
// console.log(typeof resukt) // Результат будет 'string', так как результат сложения - это строка.

// console.log (typeof('14' / '13' ) 
// )





// code academy


// alert ('Privet')
// prompt ('Kak tebya zovut?')


// var let const



var number = "123"
console.log(typeof number)


let numbers = [22, 44, 55, 6, 62]
// numbers.push(100)
// numbers.pop()
// numbers.shift()
numbers.unshift(100)
console.log(numbers)

<<<<<<< HEAD
console.log(typeof ('14' / '13')
)


let number = 10;

if (number > 0) {
    console.log("Число положительное");
} else {
    console.log("Число отрицательное или равно нулю");
}


let score = 75;

if (score >= 90) {
    console.log("Отлично");
} else if (score >= 70) {
    console.log("Хорошо");
} else if (score >= 50) {
    console.log("Удовлетворительно");
} else {
    console.log("Не сдал");
}


let num = 8;

if (num % 2 === 0) {
    console.log("Чётное число");
} else {
    console.log("Нечётное число");
}

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const car = {
    brand: "Toyota",
    speed: 0,

    accelerate(amount) {
        this.speed += amount;
        console.log(`Speed: ${this.speed} km/h`);
    },

    brake(amount) {
        this.speed -= amount;
        console.log(`Speed: ${this.speed} km/h`);
    }
};

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;

    this.speak = function () {
        console.log(`${this.name} says ${this.sound}!`);
    };
}

const dog = new Animal("Dog", "Woof");
dog.speak();

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area());
console.log(rect.perimeter());

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Bob"));

const { name, age } = person;
console.log(name, age);


let BankAccount = {
  owner: "Farkhad",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    console.log("Пополнение на " + amount);
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Снятие " + amount);
    } else {
      console.log("Недостаточно средств");
    }
  },

  checkBalance() {
    console.log("Баланс: " + this.balance);
  }
};


function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;

  this.deposit = function(amount) {
    this.balance += amount;
  };

  this.withdraw = function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  };
}

let acc1 = new BankAccount("Ali", 2000);
let acc2 = new BankAccount("Murad", 500);

acc1.deposit(300);
console.log(acc1.balance);


