var input = document.getElementById('screan_input'),
    flag, operator, operand1, operand2;

var numberArray = [], operatorArray = [];




function number(value) {
    if (flag) {
        input.value = '';
        flag = false;
    }
    if (value == '.') {
        if (input.value) {
            input.value += value;
        } else {
            input.value += '0' + value;
        }
    } else {
        input.value += value;
    }
}

function oparation(op) {
    if (operand1) {
        equal();
    }
    operand1 = input.value;
    operator = op;
    flag = true;
}


function equal() {
    operand2 = input.value;
    switch (operator) {
        case '+':
            input.value = (+operand1) + (+operand2);
            break;
        case '-':
            input.value = (+operand1) - (+operand2);
            break;
        case '*':
            input.value = (+operand1) * (+operand2);
            break;
        case '/':
            input.value = (+operand1) / (+operand2);
    }
    operand1 = '';
}

function clean() {
    input.value = '';
    operand1 = '';
    operand2 = '';
    operator = '';
    flag = false;
}


function point(value) {
    if (operand1) {
        input.value += value;
    } else {
        input.value += '0' + value;
    }
}