const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add Event
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validate();
});

const sendData = (usernameVal, sRate, count) =>{
    if(sRate === count){
        alert('Registration Successful :)');
        swal("Welcome! " +usernameVal , "Registration Successful" , "success");

        //For Moving to Next Page from Current Page
        // location.href = `page_name.html?username=${usernameVal}`;
    }
}

//Final Success Message
const successMsg = (usernameVal) =>{
    let formCon = document.getElementsByClassName('form-control');
    
    var count = formCon.length - 1;
    for(var i=0; i<formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            sendData(usernameVal, sRate, count);
        }
        else{
            return false;
        }
    }
}

const isEmail = (emailVal) => {
    var atSymbole = emailVal.indexOf("@");
    if(atSymbole < 1)   return true;

    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbole + 2)    return true;
    if(dot === emailVal.length - 1)     return true;

    return false;
}
           
//define the Validate Function
const validate = () =>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //User Name Validation
    if(usernameVal === ""){
        setErrorMsg(username, 'Username cannot be blank');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'Username min 3 character');
    }else{
        setSuccessMsg(username);
    }

    //Email Validation
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }else if(isEmail(emailVal)){
        setErrorMsg(email, 'Email not valid');
    }else{
        setSuccessMsg(email);
    }

    //Phone No. Validation
    if(phoneVal === ""){
        setErrorMsg(phone, 'Phone cannot be blank');
    }else if(phoneVal.length != 10){
        setErrorMsg(phone, 'Phone not valid');
    }else{
        setSuccessMsg(phone);
    }

    //Password Validation
    if(passwordVal === ""){
        setErrorMsg(password, 'Password cannot be blank');
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, 'Password should Minimum 6 Char');
    }else{
        setSuccessMsg(password);
    }

    //CPassword Validation
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Password cannot be blank');
    }else if(cpasswordVal != passwordVal){
        setErrorMsg(cpassword, 'Password Cannot Matching');
    }else{
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);
};

function setErrorMsg(inputM, EMsg){
    const formControl = inputM.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = EMsg;
};

function setSuccessMsg(inputM)
{
    const formControl = inputM.parentElement;
    formControl.className = "form-control success";
};