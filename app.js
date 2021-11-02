const output = document.querySelector('#output');
const buttons = document.querySelectorAll('.operator');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');


for(const button of buttons){
    button.addEventListener('click', e => {
        const num = button.getAttribute('data-num');
        output.value += num;
    })
}

equal.addEventListener('click', e => {
    if(output.value === ''){
        alert('Empty')
    }else{
        let value = eval(output.value)
        output.value = value;
       
    }
})

clear.addEventListener('click', e => {
    output.value = '';
})