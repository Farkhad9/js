// copy meselesi

const user = {
    name: "John",
    age: 30,
    work : "Developer"
  }
// let user1= user
// user1.name = "Jane"
// console.log(user.name)

// let user1={... user}   // 1 copy

// let user1 = JSON.stringify(user)  // 2 copy
// let user2 = JSON.parse(user1)  // 3 copy
// let user1 = Object.assign({//mojno dobavit cto to iz sebya}, user)  // 4 copy


// object yaratma usullari

// let person = new Object()
// person.name = "Alice"
// person.age = 25



// let person = {
//     name: "Alice",
//     age: 25,
// }



// let person = ({
//     name: "Alice",
//     age: 25,
// })



class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  getInfo=() => {
    return `Name: ${this.name}, Age: ${this.age}`
  }
}
let person1 = new Person("Alice", 25)
console.log(person1.getInfo())
