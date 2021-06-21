let result = document.getElementById('result');

const appendNumber = (temp) => {
    result.value += temp;
}

const screenClear = () =>{
    result.value = '';
}

const deleteLastChar = () => {
    result.value = result.value.slice(0,-1);
}

const equalResult = () => {
    result.value = eval(result.value);
}