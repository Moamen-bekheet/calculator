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
    else if((operator.trim()==='*')){
        return multiply(numOne,numTwo);
    }
    else if(operator.trim()==='-'){
        return subtract(numOne,numTwo);
    }
    else if(operator.trim()==='/'){
        return divide(numOne,numTwo);
    }
    else{
        //should give out an error
    }
}