// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 28;
// //multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);
//
// //concern yourself with operator precedence
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);
//
// var firstName = 'John';
// var civilStatus = 'single';
//
// if(civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is smart!');
// }
//
// var firstName = 'John';
// var age = 16;
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager');
// }
// else if (age){
//
// }
//  else {
//   console.log(firstName + ' is a man');
// }
//
// Ternary Operator:
// var firstName = 'John';
// var age = 16;
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//   SWITCH STATEMENTS
// var firstName = 'Sage';
// var job = 'dealer';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches kids how to praise Satan, their lord and savior.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an uber in Portland.');
//     break;
//   case 'dealer':
//     console.log(firstName + ' sells cocaine to high-schoolers.')
//     break;
//     default:
//       console.log(firstName + ' is unemployed.');
// }
// var year = 2018;
// function calculateAge(birthYear) {
//   return year - birthYear;
// }
// var ageJohn = calculateAge(1990);
// console.log(ageJohn);
//
// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//
//   if (retirement > 0) {
//   console.log(firstName + ' retires in ' + retirement + ' years.');
// } else {
//   console.log(firstName + ' is retired.')
// }
// }
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');
//
// function expression:
//  var whatDoYouDo = function(job, firstName) {
//    switch(job) {
//      case 'teacher':
//      return firstName + ' teaches kids to code.';
//      case 'driver':
//      return firstName + ' drives for Uber.'
//
//      case 'designer':
//      return firstName + ' designs software for Google!'
//
//      default:
//      return firstName + ' does something else.'
//    }
//  }
//  console.log(whatDoYouDo('teacher', 'John'));
//  console.log(whatDoYouDo('designer', 'Jane'));
//  console.log(whatDoYouDo('retired', 'Mark'));
//
// initialize new array:
// var names = ['John', 'Mark', 'Jane' ];
// var years = new Array(1990, 1969, 1948);
// console.log(names[0]);
// console.log(names.length);
// //muate array data:
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);
//
// var John = ['John', 'Smith', 1990, 'teacher', false];
// John.push('blue');
// John.unshift('Mr.');
// console.log(John);
//
// John.pop();
// John.shift();
// console.log(John);
//
// console.log(John.indexOf(1990));
//
// var isDesigner = John.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);

// coding challange tip calculator:
// function tipCalculator(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   }
//   else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   }
//   else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }
// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
// tipCalculator(bills[1]),
// tipCalculator(bills[2])];
//
// var finalValues = [bills[0] + tips[0],
//  bills[1] + tips[1],
//   bills[2] + tips[2],];
// console.log(tips);
// console.log(finalValues);

//
//
// objects and properties
// object literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// //retrive data from an object
// var x = 'birthYear'; console.log(john[x]);
// //mutate data
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = '1969';
// jane['lastName'] = 'Smith';
// console.log(jane);
//
// methods:
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   }
// };
//
// john.calcAge();
// console.log(john);
// coding challenge!
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   massKg: 73,
//   heightM: 1.8,
//   calcBMI: function() {
//     this.BMI = (this.massKg / (this.heightM * this.heightM));
//   }
// };
// john.calcBMI();
// console.log(john);
// var mark = {
//   firstName: 'Mark',
//   lastName: 'White',
//   massKg: 76,
//   heightM: 1.6,
//   calcBMI: function() {
//     this.BMI = (this.massKg / (this.heightM * this.heightM));
//   }
// };
//  mark.calcBMI();
// console.log(mark);
//
// if (john.BMI > mark.BMI) {
//   console.log('John\'s BMI is higher.');
// }  else {
//     console.log('Mark\'s BMI is higher');
//   }

//
// //loops and iteratiion
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }
//
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }
// var i = 0;
// while(i < john.length) {
//   console.log(john[i]);
//   i++;
// }
//
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string')
//   console.log(john[i]);
// }
//
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }
//
// //looping reverse
// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }
// var john = {
//   fullName: 'John Smith',
//   bills: [124, 48, 268, 180, 42],
//   calcTips: function() {
//     this.tips = [];
//     this.finalValues = [];
//
//     for (var i = 0; i < this.bills.length; i++) {
//       var percentage;
//       var bill = this.bills[i];
//       if (bill < 50) {
//         percentage = .2;
//       } else if (bill > 50 && bill < 200) {
//         percentage = .15;
//       } else {
//       percentage = .1;
//     }
//       this.tips[i] = bill * percentage;
//       this.finalValues[i] = bill + bill * percentage;
//     }
//   }
// }
//
// john.calcTips();
// console.log(john);
