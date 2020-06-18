'use strict';

const email = document.querySelector('#email');
const topic = document.querySelector('#topic');
const message = document.querySelector('#message');
const send = document.querySelector('#send');
const reset = document.querySelector('#resetBtn');
const form = document.querySelector('#send-email');


function disableButton(){
  send.disabled = true;
}

function validateForm(){

  validateLength(this);

  if(this.type === 'email'){
    validateEmail(this);    // función para validar el email //
  }

  let errors = document.querySelectorAll('.error');

  if(email.value.length !== 0 && topic.value.length !== 0 && message.value.length !== 0){
    if(errors.length === 0){
    send.disabled = false;
    }
  } else{
    send.disabled = true;   
  }
}

function validateLength(input){
 if(input.value.length > 0) {
   input.style.borderBottomColor = 'green';
   input.classList.remove('error');
 } else {
  input.style.borderBottomColor = 'red';
  input.classList.add('error');
 }
}

function validateEmail(input){
  const emailContent = input.value;
  if(emailContent.indexOf('@') !== -1){
    input.style.borderBottomColor = 'green';
    input.classList.remove('error');
  } else{
    input.style.borderBottomColor = 'red';
    input.classList.add('error');
  }
}

function submitEmail(evt) {
  evt.preventDefault();
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'block'; 

  const loaders = document.querySelector('#loaders');
  const sent = document.createElement('img');
  sent.setAttribute('src', 'img/mail.gif');
  sent.style.display = 'block';

  setTimeout(function(){
    spinner.style.display = 'none'; 
    loaders.appendChild(sent);
  }, 3000)

  setTimeout(function(){
    sent.remove();
    form.reset();
    email.style.borderBottomColor = 'gray';
    topic.style.borderBottomColor = 'gray';
    message.style.borderBottomColor = 'gray';  
  }, 5000)
}

function deleteInfo(evt) {
  evt.preventDefault();
  form.reset();
  email.style.borderBottomColor = 'gray';
  topic.style.borderBottomColor = 'gray';
  message.style.borderBottomColor = 'gray';
}


window.addEventListener('load', disableButton);
send.addEventListener('click', submitEmail);
reset.addEventListener('click', deleteInfo);
email.addEventListener('blur', validateForm);
topic.addEventListener('blur', validateForm);
message.addEventListener('blur', validateForm);
