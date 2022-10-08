function initialize() {
    let allButtons = document.getElementsByTagName("button");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", function (btn) {
            addNumber(btn.target.innerText);
        })
    }
}

function addNumber(value) {
    let userInput = document.getElementById('input');
    let oldValue = userInput.value;
    if (value === 'clear') {
        userInput.value = '';
    } else if (value === '=') {
        let calculateValue = eval(oldValue);
        let result = document.getElementById('result');
        userInput.value = calculateValue;
        result.innerText = oldValue + '  = ' + calculateValue;
    } else if (['+', '-', '/', '*'].includes(value)) {
        userInput.value = oldValue + ' ' + value + ' ';
    } else {
        userInput.value = oldValue + value;
    }
    console.log(value);
}

window.addEventListener("load", function () {
    initialize();
});