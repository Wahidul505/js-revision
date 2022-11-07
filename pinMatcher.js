document.getElementById('success').style.display = 'none';
document.getElementById('error').style.display = 'none';
const generateRandomNumber = () => {
    const randomNum = Math.ceil(Math.random() * 10000);
    const randomNumString = randomNum + '';
    if (randomNumString.length === 4 && randomNum) {
        return randomNum;
    }
    else {
        return generateRandomNumber();
    }
}

const GeneratePin = () => {
    const pin = generateRandomNumber();
    const generateField = document.getElementById('generate-field');
    generateField.value = pin;
}

document.getElementById('buttons').addEventListener('click', (e) => {
    const text = e.target.innerText;
    const number = parseInt(text);
    if (!isNaN(number)) {
        const typeField = document.getElementById('type-field');
        const previousNumber = typeField.value;
        typeField.value = previousNumber + number;

    }
    else if (text === 'Clear') {
        document.getElementById('type-field').value = '';
    }
    else if (text === 'Enter') {
        matchPins();
    }
})

const matchPins = () => {
    const generateField = document.getElementById('generate-field');
    const typeField = document.getElementById('type-field');
    const pin = parseInt(generateField.value);
    const typedNumber = parseInt(typeField.value);
    if (pin === typedNumber) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    }
    else {
        document.getElementById('success').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }
}










