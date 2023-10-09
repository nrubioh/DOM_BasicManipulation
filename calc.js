const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const sumBtn = document.getElementById('sumBtn');
const span = document.querySelector('span');

/* addEventListener('eventName', 'js_code') 
basically you must to put the condition + function WITHOUT parenthesis
*/

form.addEventListener('click', sumInputs);

function sumInputs(event) {
    console.log({event});
    event.preventDefault();

    let inputs_sum = parseInt(input1.value) + parseInt(input2.value);
    span.innerText = "Result: " + inputs_sum;
}

function input_onChange() {
    console.log('input changed');
}
/*  WITHOUT FORM IN OUTSIDE
sumBtn.addEventListener('click', btnOnClick);

function btnOnClick() {
    let inputs_sum = parseInt(input1.value) + parseInt(input2.value);
    span.innerText = "Result: " + inputs_sum;
}

function input_onChange() {
    console.log('input changed');
} */