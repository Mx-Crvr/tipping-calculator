"use strict"

const btn = document.getElementById('calculate-btn');
const btn2 = document.getElementById('calculate-again-btn')
const billInput = document.getElementById('bill-input');
const select = document.getElementById('select');
const tipText = document.getElementById('tip-amount');
const totalText = document.getElementById('total-amount');
const currency = document.getElementById('currency');


function getTip() {
    return (+select.value / 100) * +billInput.value;
}

function getTotal() {
    return (+billInput.value) + getTip()
}

// Removes button and inputs and displays results of tip & total calculation
function answerUI() {
    btn.style.display = 'none';
    select.style.display = 'none';
    btn2.style.display = 'block';
    billInput.style.display = 'none';
    tipText.style.display = 'block';
    totalText.style.display = 'block';
    currency.style.display = 'none';
}

btn.addEventListener('click', () => {
    answerUI();
    tipText.innerText = `Tip Amount: ${getTip()}`
    totalText.innerText = `Total Amount: ${getTotal()}`;
})

btn2.addEventListener('click', () => {
    resetUI();
})

function resetUI() {
    btn.style.display = 'block';
    select.style.display = 'block';
    select.value = 0;
    btn2.style.display = 'none';
    billInput.style.display = 'block';
    billInput.value = ''
    tipText.style.display = 'none';
    totalText.style.display = 'none';
    currency.style.display = 'block';
    tipText.innerText = `Tip Amount: `;
    totalText.innerText = `Tip Amount: `;
}