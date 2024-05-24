// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('registration-form');
    const submitButton = document.getElementById('submit-button');
    const messageDiv = document.getElementById('message');

    submitButton.addEventListener('click', (event) => {
        
        event.preventDefault(); // Prevent the form from submitting

        // Display the message as an alert
        // alert('Form submitted successfully!');

        // Or display the message on the page
        messageDiv.textContent = 'Form submitted successfully!';
        messageDiv.style.color = 'green';
    });
});
