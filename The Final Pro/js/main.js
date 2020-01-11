var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide(){
  navList.classList.remove("_Menus-show");
}



function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    producePrompt('Name is required', 'name-error' , 'red')
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('First and last name, please.','name-error', 'red');
    return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}

function validatePhone() {

  var phone = document.getElementById('contact-phone').value;

  if(phone.length == 0) {
    producePrompt('Phone number is required.', 'phone-error', 'red');
    return false;
  }

  if(phone.length != 10) {
    producePrompt('Include area code.', 'phone-error', 'red');
    return false;
  }

  if(!phone.match(/^[0-9]{10}$/)) {
    producePrompt('Only digits, please.' ,'phone-error', 'red');
    return false;
  }

  producePrompt('Valid', 'phone-error', 'green');
  return true;

}

function validateEmail () {

  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {

    producePrompt('Email Invalid','email-error', 'red');
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Email Invalid', 'email-error', 'red');
    return false;

  }

  producePrompt('Valid', 'email-error', 'green');
  return true;

}

function validateSubject() {
  var message = document.getElementById('contact-subject').value;
  var required = 10;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' more characters required','subject-error','red');
    return false;
  }

  producePrompt('Valid', 'message-error', 'green');
  return true;
}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' more characters required','message-error','red');
    return false;
  }

  producePrompt('Valid', 'message-error', 'green');
  return true;

}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validateSubject()) {
    jsShow('submit-error');
    producePrompt('Please fix errors to submit.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
    return false;
  }
  else {

  }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}



// function getInputs(){
//   // Selecting the input element and get its value
//   let completeName = document.getElementById("name").value;
//   let phoneNumber = document.getElementById("phone").value;
//   let addressMail = document.getElementById("email").value;
//   let subj = document.getElementById("subject").value;
//   let messag = document.getElementById("message");
//
//   // Displaying the value
//   alert("Comlete Name is:" +completeName);
// }
