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
// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);

// var obj1 = {
//   name: 'john',
//   age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age, obj2.age);

//functions returning functions

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     } 
//   }else if (job === 'teacher') {
//       return function(name) {
//         console.log('what subject do you teach, ' + name + '?');
//       }
//      } else {
//         return function(name) {
//           console.log('hello,' + name + ', what do you do?' );
//         }
//       }
//     }
//   var teacherQuestion = interviewQuestion('teacher');
//   var designerQuestion = interviewQuestion('designer');

//   teacherQuestion('john');
//   designerQuestion('john');

//   interviewQuestion('teacher')('mark');

//Imediately invoked function expressions, IIFE's!

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// //data privacy, hidden from outside scope
// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

//closures
// function retirement(retirementAge) {
//   var a = ' years left until retirement.';
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);
// // retirement(66)(1990);

// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementIceland(1990);
// retirementUS(1990);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?'); 
//         } else if (job === 'teacher') {
//               console.log('what subject do you teach, ' + name + '?');
//            } else {
//                 console.log('hello,' + name + ', what do you do?' );
//   }
// }
//   }

// interviewQuestion('teacher')('John');
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     } 
//   }else if (job === 'teacher') {
//       return function(name) {
//         console.log('what subject do you teach, ' + name + '?');
//       }
//      } else {
//         return function(name) {
//           console.log('hello,' + name + ', what do you do?' );
//         }
//       }
//     }

// var john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
// console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style === 'friendly') {
//       console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');

//     }
//   }
// }

// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };
// john.presentation('formal', 'morning');

// //.call
// john.presentation.call(emily, 'friendly', 'afternoon');
// //.bind
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('evening');
var Question = function(question, answers, correct) {
this.question = question;
this.answers = answers;
this.correct = correct;
}

var questions = ['Is Sally selling seashells on the sea shore?', 'Is the current president of the US admirable?', 'Are donkeys objectively adorable?']

var answers = ['Yes', 'No']

var queObjects = []
var counter = 0;
var cor =  0;
for (i=0;i > questions.length; i++) {
  if (counter === 1) cor = 1
var newQuestion = Question(questions[counter], answers, answers[cor])
counter++
queObjects.append(newQuestion);
}
  