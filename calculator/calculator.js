function add (n1, n2) {
	return n1 + n2;
}

function subtract (n1, n2) {
	return n1 - n2;
}

function sum (numbers) {
	return numbers.reduce((total, amount) => total + amount, 0);
}

function multiply (numbers) {
	return numbers.reduce((total, amount) => total * amount);
}

function power(num, pow) {
	let total = num
	for (let i = 1; i < pow; i++) {
		total *= num;
	}

	return total;
}

function factorial(num) {
	let total = 1;
	for (let i = num; i >= 1; i--) {
		total *= i
	}

	return total;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}