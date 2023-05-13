let currentInput = '0';
let operator = null;
let previousInput = null;

function addNumber(number) {
	if (currentInput === '0') {
		currentInput = number;
	} else {
		currentInput += number;
	}
	updateScreen();
}

function addOperator(newOperator) {
	previousInput = currentInput;
	currentInput = '0';
	operator = newOperator;
}

function calculate() {
	let result;
	switch(operator) {
		case '+':
			result = parseFloat(previousInput) + parseFloat(currentInput);
			break;
		case '-':
			result = parseFloat(previousInput) - parseFloat(currentInput);
			break;
		case '*':
			result = parseFloat(previousInput) * parseFloat(currentInput);
			break;
		case '/':
			result = parseFloat(previousInput) / parseFloat(currentInput);
			break;
	}
	currentInput = result.toString();
	operator = null;
	updateScreen();
}

function clearScreen() {
	currentInput = '0';
	operator = null;
	previousInput = null;
	updateScreen();
}

function updateScreen() {
	document.getElementById('screen').value = currentInput;
}
