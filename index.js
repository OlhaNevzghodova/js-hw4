const firstNumber = +prompt('Enter a number');
const secondNumber = +prompt('Enter an another number');
const lastNumber = +prompt('Enter a last number');
const average = (firstNumber + secondNumber + lastNumber) / 3;

if (Number.isNaN(firstNumber , secondNumber , lastNumber)) {
    alert('Enter a number, please')
} else {
    alert(average);
}



