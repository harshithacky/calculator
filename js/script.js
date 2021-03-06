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
        let count = 0;
        for(let i=0; i<val.length; i++)
        {
            if(val.charAt(i)=='%')
                count++;
        }
        val = val.replaceAll('%','*');
        val += `/${Math.pow(100,count)}`;
    }
    
    result.value = eval(val);
}

document.onkeypress = (e) =>{
    if(e.code == "Enter")
        equalResult();
}
