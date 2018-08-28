window.addEventListener("keypress", checkKeyPress, false);
function checkKeyPress(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        return number(+e.key);
    }
    if (e.keyCode >= 42 && e.keyCode <= 47) {
        return oparation(e.key);
    }
    if (e.keyCode == 13) {
        return equal();
    }
}

var screen = document.getElementById('screan_input'),
    flag, operator, operand1, operand2, memory, state;
var memoryReadButton = document.getElementById('memory_read');
var memoryCleanButton = document.getElementById('memory_clean');


function number(value) {
    focus();
    if (state == 2) {
        screen.innerHTML = '';
    }
    if (flag) {
        screen.innerHTML = '';
        flag = false;
    }
    if (value === '.') {
        if (screen.innerHTML) {
            screen.innerHTML += value;
        } else {
            screen.innerHTML += '0' + value;
        }
    } else if (screen.innerHTML === '0') {
        screen.innerHTML = value;
    } else {
        screen.innerHTML += value;
    }

}

function oparation(op) {
    focus();
    if (state == 1) {
        equal();
    }
    operand1 = screen.innerHTML;
    operator = op;
    flag = true;
    state = 1;
}

function equal() {
    focus();
    if (state == 2) {
        operand1 = screen.innerHTML;
    } else {
        operand2 = screen.innerHTML;
    }
    switch (operator) {
        case '+':
            screen.innerHTML = ((+operand1) + (+operand2)).toFixed(1);
            break;
        case '-':
            screen.innerHTML = ((+operand1) - (+operand2)).toFixed(1);
            break;
        case '*':
            screen.innerHTML = ((+operand1) * (+operand2)).toFixed(1);
            break;
        case '/':
            screen.innerHTML = ((+operand1) / (+operand2)).toFixed(1);
    }
    operand1 = ' ';
    state = 2;
}

function clean() {
    focus();
    screen.innerHTML = 0;
    operand1 = '';
    operand2 = '';
    operator = '';
    flag = false;
}

function point(value) {
    focus();
    if (operand1) {
        screen.innerHTML += value;
    } else {
        screen.innerHTML += '0' + value;
    }
}

function memoryStore() {
    focus();
    store(+screen.innerHTML);
}

function memoryRead() {
    focus();
    if (memory === undefined) return;
    screen.innerHTML = memory;
}

function memoryClean() {
    focus();
    if (memory === undefined) return;
    memory = undefined;
    memoryReadButton.className = 'disable-memory-button';
    memoryCleanButton.className = 'disable-memory-button';

}

function memoryAdd() {
    focus();
    store((memory || 0) + (+screen.innerHTML));
}

function memoryMinus() {
    focus();
    store((memory || 0) - (+screen.innerHTML));
}

function negetive() {
    focus();
    screen.innerHTML = -(+screen.innerHTML);
}

function percent() {
    focus();
    screen.innerHTML = operand1 * screen.innerHTML / 100;
}

// ==========================================================================

function store(value) {
    memoryReadButton.className = 'memory-button';
    memoryCleanButton.className = 'memory-button';
    memory = value;
}

function focus() {
    document.activeElement.blur()
}