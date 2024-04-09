const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');

const cname = document.getElementById('cname');
const sname = document.getElementById('sname');
const usn = document.getElementById('usn');
const email = document.getElementById('email');
const sem = document.getElementById('sem');
const branch = document.getElementById('branch');

const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const m4 = document.getElementById('m4');
const m5 = document.getElementById('m5');
const m6 = document.getElementById('m6');
const m7 = document.getElementById('m7');
const m8 = document.getElementById('m8');

//Branches
const BranchTypes = [
    "Aerospace", "Aeronautical", "Chemical", "Civil", "ComputerScience", "CSE", "Electrical", "Electronic",
    "Mechanical", "Management"
];



form2.addEventListener('submit' , (event1) =>{
    event1.preventDefault();
    validationData();
});

//Show Success Message
const showSuccessMsg = () =>{
    let formCon1 = document.getElementsByClassName('form-control');
    const formCon2 = mark.parentElement;
    var count = 0;
    for(var i=0; i<formCon1.length; i++)
    {
        if(formCon1[i].className === "form-control success"){
            count++;
        }
    }

    if(count === formCon1.length){
        formCon2.className = "marks success";
    }
};

//Checking Branch
const isBranch = (sBranch) =>{
    for(var i=0; i<BranchTypes.length-1; i++){
        if(BranchTypes[i] === sBranch)
            return false;
    }
    return true;
};

//Checking Email
const isEmail = (sEmail) =>{
    var atSymbol = sEmail.indexOf("@");
    if(atSymbol < 1)    return true;

    var dot = sEmail.lastIndexOf('.');
    if(dot <= atSymbol + 2)     return true;
    if(dot === sEmail.length - 1)   return true;

    return false;
};

//Validation Start
const validationData = () =>{

    const colName = cname.value.trim();
    const sName = sname.value.trim();
    const sUsn = usn.value.trim();
    const sEmail = email.value.trim();
    const sSem = sem.value.trim();
    const sBranch = branch.value.trim();

    //College Name Validation
    if(colName === ""){
        errorMsg(cname, "College Name Should Not Blank...!");
    }
    else if(colName.length <= 5){
        errorMsg(cname, "College Name Must Contains Minimum 6 Characters...!")
    }
    else{
        successMsg(cname);
    }

    //Student Name Validation
    if(sName === ""){
        errorMsg(sname, "Student Name Should Not Blank...!");
    }
    else if(sName.length <= 2){
        errorMsg(sname, "Student Name Must Contains Minimum 3 Characters...!")
    }
    else{
        successMsg(sname);
    }

    //Student USN Validation
    if(sUsn === ""){
        errorMsg(usn, "Student USN Should Not Blank...!");
    }
    else if(sUsn.length != 10 ){
        errorMsg(usn, "Student USN Must Contains 10 Characters...!")
    }
    else{
        successMsg(usn);
    }

    //Student Email Validation
    if(sEmail === ""){
        errorMsg(email, "Student Email Should Not Blank...!");
    }
    else if(isEmail(sEmail)){
        errorMsg(email, "Student Email Not Valid...!")
    }
    else{
        successMsg(email);
    }

    //Student Semester Validation
    if(sSem === ""){
        errorMsg(sem, "Semester Should Not Blank...!");
    }
    else if(sSem > 8){
        errorMsg(sem, "Student Semester Not Valid...!")
    }
    else{
        successMsg(sem);
    }

    //Student Branch Validation
    if(sBranch === ""){
        errorMsg(branch, "Branch Should Not Blank...!");
    }
    else if(isBranch(sBranch)){
        errorMsg(branch, "Student Branch Not Valid...!")
    }
    else{
        successMsg(branch);
    }

    // showSuccessMsg();
    validationMarks(sName);
};

function errorMsg(inputE, Msg){
    const forC1 = inputE.parentElement;
    const small = forC1.querySelector('small');
    forC1.className = "form-control error";
    small.innerText = Msg;
};

function successMsg(inputS){
    const forC1 = inputS.parentElement;
    forC1.className = "form-control success";
};

function validationMarks(nameS){
    const Mark = [m1.value, m2.value, m3.value, m4.value, m5.value, m6.value, m7.value, m8.value];

    const M1 = m1.value;
    const M2 = m2.value;
    const M3 = m3.value;
    const M4 = m4.value;
    const M5 = m5.value;
    const M6 = m6.value;
    const M7 = m7.value;
    const M8 = m8.value;

    for(var i=0; i<=Mark.length; i++){
        if(Mark[i] === ""){
            alert("Subject " +(i+1)+ " Mark is NOT Entered...!");
        }
    }

    alert("Student : " +nameS+ " Data Entering Successfully Completed.. :)");
};