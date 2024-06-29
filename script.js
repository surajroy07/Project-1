function appendToScreen(value) {
    const currentScreen = document.getElementById('currentOperationScreen');
    currentScreen.textContent += value;
}

function calculate() {
    const currentExpression = document.getElementById('currentOperationScreen').textContent;
    try {
        const result = evaluateExpression(currentExpression);
        document.getElementById('currentOperationScreen').textContent = result;
    } catch (error) {
        document.getElementById('currentOperationScreen').textContent = 'Error';
    }
}

function evaluateExpression(expression) {
    try {
        return eval(expression); 
    } catch (error) {
        console.error("Error evaluating expression:", error);
        return NaN;
    }
}

function clearInput() {
    document.getElementById('currentOperationScreen').textContent = '';
}
