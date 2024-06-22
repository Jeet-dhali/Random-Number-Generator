
 //Variables And Constant
const minNumberInput = document.getElementById("minNumber")
const maxNumberInput = document.getElementById("maxNumber")
const randNumber = document.getElementById("randNumber");
const btn = document.getElementById("button");
const result = document.getElementById("result");
const clearbtn = document.getElementById("clearbtn")
let randomNumber;

//Random Number Generate Button
btn.onclick = function() {

    const minNumber = Number(minNumberInput.value);
    const maxNumber = Number(maxNumberInput.value);
    result.style.display = 'revert';
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    randNumber.textContent = randomNumber;
}

//Clear To Zero Button
clearbtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = 0;
})})


