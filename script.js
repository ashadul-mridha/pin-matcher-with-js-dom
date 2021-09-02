//create a random pin

function getPin(){

    let pin = Math.round(Math.random()*10000);
    
    let pinStr = pin + '';

    if (pinStr.length == 4) {
        return pin;
    }
    
}

//show random pin
document.getElementById('generate-pin').addEventListener('click',function(){
    
    const pin = getPin();

    document.getElementById('generate-pin-field').value = pin;
})

//enter pin
//nine
document.getElementById('nine').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 9;
})
document.getElementById('eight').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 8;
})
document.getElementById('seven').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 7;
})
document.getElementById('six').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 6;
})
document.getElementById('five').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 5;
})
document.getElementById('four').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 4;
})
document.getElementById('three').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 3;
})
document.getElementById('two').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 2;
})
document.getElementById('one').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 1;
})
document.getElementById('zero').addEventListener('click',function(){
    let oldValue = document.getElementById('enter-pin-field').value;
    document.getElementById('enter-pin-field').value = oldValue + 0;
})
document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('enter-pin-field').value = ' ';
})


//check Submit Button
document.getElementById('submit-button').addEventListener('click',function(){
    let enterPinNUm = document.getElementById('enter-pin-field').value;
    enterPinNUm = parseInt(enterPinNUm);
    
    let generatePinNum = document.getElementById('generate-pin-field').value;
    generatePinNum = parseInt(generatePinNum);

    const successMsg = document.getElementById('notify-success');
    const errorMsg = document.getElementById('notify-fail');

    if (enterPinNUm == generatePinNum) {
        
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';

    }else{

        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
})