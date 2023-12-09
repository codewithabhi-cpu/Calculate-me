let result = document.getElementById('result');

function appendToResult(value) {
    result.textContent += value;
}

function clearResult() {
    result.textContent = '';
}

function calculateResult() {
    try {
        result.textContent = eval(result.textContent);
    } catch (error) {
        result.textContent = 'Error';
    }
}