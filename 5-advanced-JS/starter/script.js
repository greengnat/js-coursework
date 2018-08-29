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


// Question.prototype.correctAns = function() {
//   if (this.correct === correct) {
//     console.log('That is correct!');
//   } else {
//     console.log('Wrong answer, try again!');
//   }
// }
var q1 = new Question('Is javascript the greatest coding language?', ['yes','no'], 0);

var q2 = new Question('Is the sitting US president respectable?', ['yes', 'no'], 1);

var q3 = new Question('Did the large hadron collider put our universe onto an alternate timeline?', ['yes', 'no'], 0);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length); 



Question.prototype.displayQue = function() {
  console.log(this.question);
  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
}

questions[n].displayQue();