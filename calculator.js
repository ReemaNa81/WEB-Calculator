let currentInput = '';
let screen = document.getElementById('screen');
let memory = 0;


function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}


function changeSign() {
    currentInput = parseFloat(currentInput) * -1;
    updateScreen();
}

function handleMemoryOperation(operation) {
    switch (operation) {
        case 'MC':
            memory = 0;
            break;
        case 'MR':
            currentInput = memory.toString();
            break;
        case 'M+':
            memory += parseFloat(currentInput);
            break;
        case 'M-':
            memory -= parseFloat(currentInput);
            break;
        case 'MS':
            memory = parseFloat(currentInput);
            break;
        case 'M':
            currentInput = memory.toString();
            break;
        default:
            break;
    
        }  
        updateScreen();
      }

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;
    if (['MC', 'MR', 'M+', 'M-', 'MS', 'M'].includes(buttonValue)) {
        handleMemoryOperation(buttonValue);
        return;
    }

    switch (buttonValue) {
        case '=':
            try {
                const result = new Function('return ' + currentInput)();
                currentInput = result;
            } catch (error) {
                currentInput = 'Error';
            }
            break;
        case 'C':
            currentInput = '';
            break;
        case '⌫':
            currentInput = currentInput.slice(0, -1);
            break;
        case 'x**2':
            currentInput = Math.pow(currentInput, 2);
            break;
        case '1/x':
            currentInput = `1/(${currentInput})`;
            break;
        case '|x|':
            currentInput = `Math.abs(${currentInput})`;
            break;
        case 'exp':
            currentInput = `Math.exp(${currentInput})`;
            break;
        case 'mod':
            currentInput += '%';
            break;
        case '√':
            if (parseFloat(currentInput) >= 0) {
                currentInput = Math.sqrt(parseFloat(currentInput));
            } else {
                currentInput = 'Error';
            }
            break;
        case '(':
            currentInput += '(';
            break;
        case ')':
            currentInput += ')';
            break;
        case '10^x':
            currentInput = Math.pow(10, parseFloat(currentInput));
            break;
        case 'log':
            currentInput = `Math.log10(${currentInput})`;
            break;
        case 'ln':
            currentInput = `Math.log(${currentInput})`;
            break;
        case '*':
            currentInput += '*';
            break;
        case '÷':
            currentInput += '/';
            break;

        case 'x^y':
            currentInput += '**';
            break; 

        case '2^nd':
            alert("This is the 2nd button. Implement your logic here.");
             break;    

         

        case '10^x':
            currentInput = Math.pow(10, parseFloat(currentInput));
            break;   


        case 'n!':
            try {
                const num = parseFloat(currentInput);
                if (!isNaN(num) && Number.isInteger(num) && num >= 0) {
                    currentInput = calculateFactorial(num);
                } else {
                    throw new Error('Invalid input for factorial');
                }
            } catch (error) {
                currentInput = 'Error';
            }
            break;
        default:
            currentInput += buttonValue;
    }

    updateScreen();
}

function updateScreen() {
    screen.innerText = currentInput;
}
