const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const cheackButton = document.querySelector("#cheack-button")
var message = document.querySelector("#error-message")
var noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

cheackButton.addEventListener("click", function validityCheack(){
    message.style.display = "none";
   
    if(billAmount.value > 0){

        if(billAmount.value <= cashGiven.value){
            const balanceAmount = cashGiven.value - billAmount.value;
            calculateChange(balanceAmount);
        }else{
            showMessage("The Given amount less than Bill amount")
        }

    }else{
        showMessage("Invalid Bill Amount!! The bill amount should be positive");
    }

});

function calculateChange(balance){
    for( let i = 0; i < availableNotes.length; i++){
        var numberOfNotes = Math.trunc(balance/availableNotes[i]);
        balance = balance % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

    }
    
}

function showMessage(message1){
    message.style.display = "block"
    message.innerText = message1;
}

