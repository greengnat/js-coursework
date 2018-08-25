// Function Constructor

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   }
//
//
// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// }
//
//
//
//
//  var john = new Person('John', 1990, 'teacher');
//
//
//
// var jane = new Person('Jane', 1969, 'designer');
//
// var mark = new Person('Mark', 1948, 'retired');
//
//  john.calculateAge();
//  jane.calculateAge();
//  mark.calculateAge();
//

// var Crayon = function(color, taste, texture) {
//   this.color = color;
//   this.taste = taste;
//   this.texture = texture;
// }
//
// var redCrayon = new Crayon('red', 'liqourice', 'waxy');
//
// console.log(redCrayon);


//object.create
// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// };
//
// var john = Object.create(personProto);
// john.name = 'John',
// john.yearOfBirth = 1990,
// john.job = 'teacher';
//
// var jane = Object.create(personProto, {
//   name: {value: 'Jane'},
//   yearOfBirth: {value: 1969},
//   job: {value: 'designer'}
// });


//primitives vs Objects
var a = 23;
var b = a;
a = 46;
console.log(a, b);

var obj1 = {
  name: 'john',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);
