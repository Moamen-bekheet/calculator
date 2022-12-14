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
function doOperation(operatorArg){
    if(firstOperand===''){
        return;
    }
    else if (operator!==operatorArg){
        operator = operatorArg;
    }
    else if(secondOperand!==''){
        result = operate(operator,parseFloat(firstOperand),parseFloat(secondOperand));
        display.textContent = result;
        secondOperand = '';
        firstOperand = result;
    }
}
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';
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
const pointBtn = document.querySelector('#point')
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
pointBtn.addEventListener('click',function(){
    if(display.textContent.includes('.')){
        return
    }
    updateOperandsAndDisplay('.');
})
delBtn.addEventListener('click',function(){
    updateOperandsAndDisplay(display.textContent.slice(0,display.textContent.length-1));
});
acBtn.addEventListener('click',function(){
    display.textContent = '';
    firstOperand='';
    operator='';
    secondOperand='';
});
multBtn.addEventListener('click', function(){
    doOperation('×');
});
addBtn.addEventListener('click',function(){
    doOperation('+');
});
subBtn.addEventListener('click',function(){
    doOperation('-');
});
divBtn.addEventListener('click',function(){
    doOperation('÷');
});
eqBtn.addEventListener('click',function(){
    if(firstOperand===''){
        return;
    }
    else if(secondOperand!==''&&operator!==''){
        result = operate(operator,parseFloat(firstOperand),parseFloat(secondOperand));
        display.textContent = result;
        secondOperand = '';
        firstOperand = result;
    }
})