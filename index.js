
const buttonNumInput = document.querySelectorAll(".button")
let showScreen = document.getElementById("screen-1")
let valgtTall  = 0
let tallOperatorTall = []
let operator = ""
let result1 = 0
let memoryScreen = document.getElementById("memory")

buttonNumInput.forEach(handleClick)
function handleClick(btn) {
    btn.addEventListener("click", clicker)

    function clicker(y) {
        valgtTall = y.target.innerText
        showScreen.innerText += valgtTall
    }
}

function del() {
    memoryScreen.innerText = ""
    showScreen.innerText = ""
    tallOperatorTall = []
}

const back = () => showScreen.innerText = showScreen.innerText.slice(0, showScreen.innerText.length - 1)


const buttonOperatorInput = document.querySelectorAll( ".button-operator")

buttonOperatorInput.forEach(handleOperatorClick)
function handleOperatorClick (oBtn){
    oBtn.addEventListener("click", oClicker)

    function oClicker (operatorVar){
        operator = operatorVar.target.innerText
        tallOperatorTall.push(showScreen.innerText, operator)
        memoryScreen.innerText = showScreen.innerText + " " + operator
        operator = ""
        showScreen.innerText = ""
    }
}

function arrayToExp(arr) {
    return arr.join(" ")
}

function sum() {
    tallOperatorTall.push(showScreen.innerText)
    result1 = eval(arrayToExp(tallOperatorTall))
    showScreen.innerText = result1
    tallOperatorTall = []
    memoryScreen.innerText = ""
}




