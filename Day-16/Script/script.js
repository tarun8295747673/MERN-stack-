function submitHandler(){
    const name = getvalue('.name');
    const email = getvalue('.email');
    const subject = getvalue('.subject');
    const message = getvalue('.message');

    console.log(name, email, subject, message);

    alert(name +"\n"+ email +"\n"+ subject +"\n"+ message);
}

function getvalue(selector){
    return document.querySelector(selector).value;
}

function formValidation(event){
    event.preventDefault();
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const subject = document.querySelector('.subject').value;
    const message = document.querySelector('.message').value;

    let isValid = true;

    if(!name){
        const nameError = document.querySelector('#name-error');
        nameError.style.display = 'block';
        isValid = false;
    }else{
        const nameError = document.querySelector('#name-error');
        nameError.style.display = 'none';
    }

    if(!email){
        const emailError = document.querySelector('#email-error');
        emailError.style.display = 'block';
        isValid = false;
    }else{
        const emailError = document.querySelector('#email-error');
        emailError.style.display = 'none';
    }

    if(!subject){
        const subjectError = document.querySelector('#text-error');
        subjectError.style.display = 'block';   
        isValid = false;
    }else{
        const subjectError = document.querySelector('#text-error');
        subjectError.style.display = 'none';
    }    

    if(!message){
        const messageError = document.querySelector('#message-error');
        messageError.style.display = 'block';
        isValid = false;
    }else{
        const messageError = document.querySelector('#message-error');
        messageError.style.display = 'none';   
    }

    if (isValid) {
        submitHandler();
    }
}