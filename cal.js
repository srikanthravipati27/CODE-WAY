let currentInput = '';
let currentOperator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstOperand = '';
    updateDisplay();
}

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function calculateResult() {
    if (currentInput) {
        try {
            // Using eval to handle the calculation
            const result = eval(currentInput);
            
            // Checking for Infinity or NaN results
            if (isNaN(result) || !isFinite(result)) {
                currentInput = "Error";
            } else {
                currentInput = result.toString();
            }
        } catch (error) {
            currentInput = "Error";
        }

        updateDisplay();
    }
}


