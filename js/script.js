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
    let val = result.value;
    if(val.includes('%'))
    {
        val = val.replaceAll('%','*');
        val += '/100';
    }
    result.value = eval(val);
}
