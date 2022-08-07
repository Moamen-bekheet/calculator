function add(numOne, numTwo){
    return numOne + numTwo;
}

function multiply(numOne,numTwo){
    return numTwo*numOne;
}

function subtract(numOne,numTwo){
    return numOne - numTwo;
}

function divide(numOne,numTwo){
    return numOne/numTwo;
}

function operate(operator, numOne, numTwo){
    if(operator.trim()==='+'){
        return add(numOne,numTwo);
    }
    else if((operator.trim()==='×')){
        return multiply(numOne,numTwo);
    }
    else if(operator.trim()==='-'){
        return subtract(numOne,numTwo);
    }
    else if(operator.trim()==='÷'){
        return divide(numOne,numTwo);
    }
    else{
        //should give out an error
    }
}
function updateOperandsAndDisplay(buttonNumber){
    if(operator===''){
        display.textContent +=`${buttonNumber}`;
        firstOperand = display.textContent;
    }
    if(operator !== ''){
        secondOperand += `${buttonNumber}`;
        display.textContent = secondOperand;
    }
}
let firstOperand = '';
let secondOperand = '';
let operator = '';
const display = document.querySelector('#screen');
const zeroBtn = document.querySelector('#zero')
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const delBtn = document.querySelector('#del');
const acBtn = document.querySelector('#ac');
const multBtn = document.querySelector('#multiplicatoin');
const divBtn = document.querySelector('#division');
const addBtn = document.querySelector('#addition');
const subBtn = document.querySelector('#subtraction');
const eqBtn = document.querySelector('#equals');
zeroBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(0);
})
oneBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(1);
});
twoBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(2);
});
threeBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(3);
});
fourBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(4);
});
fiveBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(5);
});
sixBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(6);
});
sevenBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(7);
});
eightBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(8);
});
nineBtn.addEventListener('click', function(){
    updateOperandsAndDisplay(9);
});
delBtn.addEventListener('click',function(){
    display.textContent = display.textContent.slice(0,display.textContent.length-1);
})
acBtn.addEventListener('click',function(){
    display.textContent = '';
    firstOperand='';
    operator='';
    secondOperand='';
})
multBtn.addEventListener('click', function(){
    if(firstOperand===''){
        return;
    }
    else if (operator===''){
        operator = '×';
    }
    else if(secondOperand!==''){
        firstOperand = operate('×',parseFloat(firstOperand),parseFloat(secondOperand));
        display.textContent = firstOperand;
    }
})