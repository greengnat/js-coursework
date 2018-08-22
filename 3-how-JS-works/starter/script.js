///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping
//functions
// calculateAge(1965);
// function calculateAge(year) {
//   console.log(2018 - year);
// }
//
// //retirement(1965);
// var retirement = function(year) {
//   console.log(65 - (2018 - year));
// }
// retirement(1965);
//variables



// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//METHOD BORROWING AND INNER FUNCTIONS!!!!

// var john = {
//   name: 'John',
//   yearOfBirth: 1984,
//   calculateAge: function() {
//     console.log(this);
//     console.log(2018 -
//     this.yearOfBirth);
//   }
// }
//
// john.calculateAge();
//
// var mike = {
//   name: 'Mike',
//   yearOfBirth: 1984
// };
//
// mike.calculateAge = john.calculateAge;
//
// mike.calculateAge();
