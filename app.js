function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        return getPin();
    }

}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const caleInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            caleInput.value = '';
        }
    }
    else {
        const previusNumber = caleInput.value;
        const newNumber = previusNumber + number;
        caleInput.value = newNumber;
    }
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const successMessage = document.getElementById('notify-success');
    const fialError = document.getElementById('notify-fial');
    if (pin == typedNumber) {
       successMessage.style.display = 'block';
        fialError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        fialError.style.display = 'block';
    }
}