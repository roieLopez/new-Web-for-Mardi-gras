let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let message = document.querySelector('.message');
let btn = document.querySelector('.btnSend');

btn.addEventListener('click', function () {
        localStorage.setItem('data', ` fname : ${fname.value} || lname : ${lname.value} || email : ${email.value} || message : ${message.value}`);
});

