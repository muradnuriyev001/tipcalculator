const range = document.getElementById("rangeinput")
const display = document.getElementById("display")
const moneyhtml = document.getElementById("moneyinput")
const tipamounthtml = document.getElementById("tipamount")
const totalamounthtml = document.getElementById("totalamount")
const calculate = document.getElementById("calculatebtn")

var tipPercent;
var moneyAmount;
var tipAmount;
var totalAmount;

range.addEventListener("change", () => {
    tipPercent = range.value
    display.innerHTML = tipPercent + "%"
})

calculate.addEventListener("click", () => {
    tipPercent = range.value
    moneyAmount = moneyhtml.value
    tipAmount = moneyAmount * tipPercent / 100
    totalAmount = Number(tipAmount) + Number(moneyAmount)
    
    tipamounthtml.innerHTML = "Tip Amount: " + tipAmount.toFixed(1) // ToFixed Rounding Number
    totalamounthtml.innerHTML = "Total Bill with Tip:" + totalAmount.toFixed(1)
})









