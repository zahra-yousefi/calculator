var input = document.getElementById('screan_input'),
    flag, operator, operand1, operand2, memory;
var memoryReadButton = document.getElementById('memory_read');
var memoryCleanButton = document.getElementById('memory_clean');

function number(value) {
    if (flag) {
        input.value = '';
        flag = false;
    }
    if (value === '.') {
        if (input.value) {
            input.value += value;
        } else {
            input.value += '0' + value;
        }
    } else if (input.value === '0') {
        input.value = value;
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

function memoryStore() {
    store(+input.value);
}

function memoryRead() {
    if (memory === undefined) return;
    input.value = memory;
}

function memoryClean() {
    if (memory === undefined) return;
    memory = undefined;
    memoryReadButton.className = 'disable-memory-button';
    memoryCleanButton.className = 'disable-memory-button';

}

function memoryAdd() {
    store((memory || 0) + (+input.value));
}

function memoryMinus() {
    store((memory || 0) - (+input.value));
}

function store(value) {
    memoryReadButton.className = 'memory-button';
    memoryCleanButton.className = 'memory-button';
    memory = value;
}