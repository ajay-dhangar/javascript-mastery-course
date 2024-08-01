document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '0';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            handleInput(value);
        });
    });

    function handleInput(value) {
        switch(value) {
            case 'C':
                displayValue = '0';
                break;
            case 'delete':
                displayValue = displayValue.slice(0, -1) || '0';
                break;
            case '=':
                try {
                    displayValue = eval(displayValue).toString();
                } catch {
                    displayValue = 'Error';
                }
                break;
            default:
                displayValue = displayValue === '0' ? value : displayValue + value;
                break;
        }
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = displayValue;
    }
});