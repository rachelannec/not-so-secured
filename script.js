document.querySelector('#login-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    

    // password for content pages
    let password1 = 'password1';
    let password2 = 'password2';
    if (password === password1) {
        window.location.href = '/content-pages/content-1.html'; // to redirect to the content-1 page ;-;  
    } else if (password === password2) {
        window.location.href = '/content-pages/content-2.html'; // to redirect to the content-2 page ;-;
    } else {
        errorMessage.textContent = 'Wrong key! The contents on this page ain\'t for you. :>';
    }
});

function goBack() {
    window.location.href = '../index.html';
}