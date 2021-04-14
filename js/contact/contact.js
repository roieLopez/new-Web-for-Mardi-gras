let btn = document.querySelector('.btnSend');
var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

function newPerson() {
        var next = localStorage.getItem('');
        next = next ? parseInt(next) : 0;
        var newPerson = next + 1;
        localStorage.setItem('', newPerson);
        return next;
}

btn.addEventListener('click', function () {
        let result = document.querySelector('.message2');
        let fname = document.querySelector('.fname');
        let lname = document.querySelector('.lname');
        let email = document.querySelector('.email');
        let textArea = document.querySelector('.message');
        if (fname.value !== '' && lname.value !== '' && (emailfilter.test(email.value)) && textArea.value !== '' && fname.value.length >= 3 && lname.value.length >= 3 && email.value.length >= 3 && textArea.value.length >= 3) {

                let person = {
                        firstName: fname.value,
                        lastName: lname.value,
                        email: email.value,
                        textArea: textArea.value
                };

                localStorage.setItem(newPerson(), JSON.stringify(person));

                // localStorage.setItem('data', ` fname : ${fname.value} || lname : ${lname.value} || email : ${email.value} || message : ${textArea.value}`);
                result.innerHTML = (`<div style="color : green; font-weight: 500; font-size: 18px;">Success</div>`);
        } else {
                result.innerHTML = (`<div style="color : rgba(255, 0, 0, 0.563); font-weight: 500; font-size: 18px;">Faild</div>`);
        }
});