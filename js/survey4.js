document.querySelector('.skip').addEventListener('click', function(event) {
    var name = document.querySelector('#page4input1').value;
    var email = document.querySelector('#page4input2').value;
    var age = document.querySelector('#page4input3').value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;
    if (name.split(' ').length < 2) {
        event.preventDefault();
        alert('Please enter your full name.');
    } else if (!emailRegex.test(email)) {
        event.preventDefault();
        alert('The email address you entered is not valid. Please enter a valid email address');
    } else if (age === '') {
        event.preventDefault();
        alert('Please enter your age.');
    }
});