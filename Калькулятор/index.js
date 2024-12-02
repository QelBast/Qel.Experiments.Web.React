const histCont = $('.ops-history-container');
const input = $('.input');
clickEventsRegister();

function appendOpHistory(op) {
   histCont.append(`<p>${op}</p>`); 
}

function addToInput(char) {
    let currentText = input.attr('value');
    currentText ??= "";
    console.trace('current: ', currentText);
    let newText = currentText;
    if(char == '+' ||
        char == '-' ||
        char == '/' ||
        char == '*'
    )
    {
        console.trace('len ', currentText.length);
        console.trace('at ', currentText.at(currentText.length-1));
        if(currentText.endsWith('+')
            || currentText.endsWith('-')
            || currentText.endsWith('/')
            || currentText.endsWith('*'))
        {
            console.trace(`currentbefore: ${currentText}`)
            currentText.at(currentText.length-1) = '';
        }
    }
    console.trace(`current: ${currentText}`)
    newText += char;
    input.attr('value', newText)
    console.log(input.attr('value'));
}

function clickEventsRegister() {
    $('button').on('click', function() {
        console.trace('Кнопонтька')
    });
    $('.symbol-button').on('click', function() {
        const symbol = $(this).text()
        console.log(symbol);
        addToInput(symbol)
    });
    $('.equals-button').on('click', function() {
        equalsOp()
    });
    $('.clear-button').on('click', function() {
        clearInput();
    })
}

function equalsOp() {
    const value = input.attr('value');
    if(value != undefined &&
        !value.endsWith('+') &&
        !value.endsWith('-') &&
        !value.endsWith('/') &&
        !value.endsWith('*') &&
        !value.startsWith('+') &&
        !value.startsWith('-') &&
        !value.startsWith('/') &&
        !value.startsWith('*')
    )
    {
        executeOperation(value);
    }
    else
    {
        alert('Выражение не корректно');
    }
    clearInput();
}

function clearInput() {
    input.attr('value', '');
}

function executeOperation(text) {
    console.trace(text);
    const regex = /\+|-|\/|\*/gm;
    const ops = text.match(regex);
    console.log('ops: ', ops);
    const splittedText = text.replace(regex, ' ').split(' ');
    console.log('splitted: ', splittedText);
    
    let result = splittedText[0];
    for (let i = 0; i < ops.length; i++) {
        const op = ops[i];
        const digit1 = parseFloat(result);
        const digit2 = parseFloat(splittedText[i+1]);
        switch (op) {
            case '+':
                result = digit1 + digit2;
                break;
            case '-':
                result = digit1 - digit2;
                break;
            case '/':
                result = digit1 / digit2;
                break;
            case '*':
                result = digit1 * digit2;
                break;
            default:
                break;
        }
        const finalExpr = `${digit1} ${op} ${digit2} = ${result}`;
        console.log(`executed operation ${i}: `, finalExpr);
        appendOpHistory(finalExpr);
    }
}
