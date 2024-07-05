let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;

console.log(myString); // Output: Hello, world!
console.log(myNumber); // Output: 42
console.log(myBoolean); // Output: true


/** Variable end */

/** Functions start */

function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 + num2;
    console.log("Addition Result: " + result);
    document.getElementById('result').innerText = "Addition Result: " + result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 - num2;
    console.log("Subtraction Result: " + result);
    document.getElementById('result').innerText = "Subtraction Result: " + result;
}

function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 / num2;
    console.log("Division Result: " + result);
    document.getElementById('result').innerText = "Division Result: " + result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    console.log("Multiplication Result: " + result);
    document.getElementById('result').innerText = "Multiplication Result: " + result;
}


/** Functions end */


/** Already included input fields and buttons for user interaction above */


/** Data for Chart.js end */

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Monthly Expenses',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Config for Chart.js
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the chart
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

/** Chart.js end */

