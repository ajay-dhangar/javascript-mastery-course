document.addEventListener('DOMContentLoaded', function() {
    const tipForm = document.getElementById('tip-form');
    const billAmountInput = document.getElementById('bill-amount');
    const tipPercentageInput = document.getElementById('tip-percentage');
    const numberOfPeopleInput = document.getElementById('number-of-people');
    const tipAmountOutput = document.getElementById('tip-amount');
    const totalAmountOutput = document.getElementById('total-amount');
    const amountPerPersonOutput = document.getElementById('amount-per-person');

    tipForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);
        const numberOfPeople = parseInt(numberOfPeopleInput.value);

        if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
            alert('Please enter valid values');
            return;
        }

        const tipAmount = billAmount * tipPercentage;
        const totalAmount = billAmount + tipAmount;
        const amountPerPerson = totalAmount / numberOfPeople;

        tipAmountOutput.innerText = tipAmount.toFixed(2);
        totalAmountOutput.innerText = totalAmount.toFixed(2);
        amountPerPersonOutput.innerText = amountPerPerson.toFixed(2);
    });
});
