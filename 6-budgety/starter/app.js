 var budgetController = (function() {

    //some code

 })();


 


 var UIController = (function(){
     var DOMstrings = {
         inputType: '.add__type',
         inputDescription: '.add__description',
         inputValue: '.add__inputValue',
         inputBtn : '.add__btn'
     };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value  
            };
           
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

 })();

 //global app connector:
var controller = (function(budgetCtrl, UICtrl){

    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function() {
    // 1. get filled input data
   var input = UICtrl.getInput();
   console.log(input);
    // 2. add item to budget controller
   
    // 3. add item to UI

    // 4. calc budget

    // 5. display budget on UI


    }
document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
    }

});

})(budgetController, UIController);
