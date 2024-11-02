let array = [];
let numberElement = document.getElementById('num');
let arrayElement = document.getElementById('array');


function addNumber(){
    let number = numberElement.value;
    array.push(number);
}

function showArray(){
    arrayElement.innerHTML='';
    for(let i = 0; i < array.length; i++){
        arrayElement.innerHTML += `<div class="item">${array[i]}</div>`;
}
}

function cleanArray(){
    arrayElement.innerHTML = '';
    array = [];
}