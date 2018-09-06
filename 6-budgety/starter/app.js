
 
 var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value;
    };

    var allExpenses = [];
 })(); 


 


 var UIController = (function(){
     var DOMstrings = {
         inputType: '.add__type',
         inputDescription: '.add__description',
         inputValue: '.add__value',
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

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
        
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        
        });
    };

  
    var ctrlAddItem = function() {
    // 1. get filled input data
   var input = UICtrl.getInput();
 
    // 2. add item to budget controller
   
    // 3. add item to UI

    // 4. calc budget

    // 5. display budget on UI
    };

    return {
        init: function() {
            console.log('app has started!');
            setupEventListeners();
        }
    }


})(budgetController, UIController);

controller.init();
