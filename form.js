const form  = document.querySelector('#form');
const input = document.querySelectorAll('.input');
const span  = document.querySelectorAll('.span');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const checkbox = document.querySelector('#checkbox');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    addressValidate();
    passwordValidate();
    replyPasswordValidate();

    if(!checkbox.checked){
        alert('Precisa aceitar os termos e condições');
    }
});

function setError(index){
    input[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}
function removeError(index){
    input[index].style.border = '2px solid green';
    span[index].style.display = 'none';
}

function nameValidate(){
    if(input[0].value.length < 3 || input[0].value.length > 8 ){
        setError(0);
    }
    else{
        removeError(0);
    }
}
function emailValidate(){
    if(!emailRegex.test(input[1].value)){
        setError(1);
    }
    else{
        removeError(1);
    }
}
function addressValidate(){
    if(input[2].value.length <= 20){
        setError(2);
    }
    else{
        removeError(2);
    }
}
function passwordValidate(){
    if(input[3].value.length < 10){
        setError(3);
    }
    else{
        removeError(3);
    }
}
function replyPasswordValidate(){
    if(input[4].value != input[3].value){
        setError(4);
    }
    else{
        removeError(4);
    }
}