function initialize() {
    let allButtons = document.getElementsByTagName("button");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", function(btn) {
            addNumber(btn.target.innerText);
        })
    }
}

function addNumber(value) {
    console.log(value);
}

window.addEventListener("load",function() {
    initialize();
});